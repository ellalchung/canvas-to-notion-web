<template>
  <div v-if="errorOccurred" class="bg callback-container">
    <h1>authentication failed</h1>
    <p class="pb-4">there was an error during authentication. please try again.</p>
    <v-btn color="primary" class="text-none" @click="goToHome">go to home</v-btn>
  </div>
  <div v-else class="bg callback-container">
    <h1>Authenticating...</h1>
    <img :src="loadingGif" alt="typing cat gif" />
  </div>
</template>
  
<script>
import { useAuthStore } from '@/stores/auth/authStore';
import axios from 'axios';

export default {
  name: 'Callback',
  data() {
    return {
      loadingGif: 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExenJkaTNsZHlldTMxcHQxd2EzdnN3dGlwdXAwbXNkdnBycW1uYjV5YSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/4GWmvKBiml8vPQUchI/giphy.gif',
      errorOccurred: false
    };
  },
  async mounted() {
    const queryParams = new URLSearchParams(window.location.search);
    const code = queryParams.get('code'); // Get authorization code from URL

    if (code) {
      try {
      const serverUrl = import.meta.env.VITE_APP_SERVER_URL;
      const tokenResponse = await axios.post(`${serverUrl}/auth/exchange-token`, {
        code: code}, {withCredentials: true});

      const userId = tokenResponse.data.owner.user.id;
      const workspaceId = tokenResponse.data.workspace_id;
      const workspaceName = tokenResponse.data.workspace_name;
      const pageId = tokenResponse.data.duplicated_template_id;

      // Save the access token in store
      const authStore = useAuthStore();
      authStore.setUserId(userId);
      authStore.setWorkspaceId(workspaceId);
      authStore.setWorkspaceName(workspaceName);
      authStore.setPageId(pageId);

      // Redirect to your main page after successful login
      this.$router.push('/setup');
    } catch (error) {
      console.error('Error during token exchange:', error);
      this.errorOccurred = true;
    }
    }
  },    
  methods: {
    goToHome() {
        this.$router.push("/");
    },
  }
};
</script>

<style scoped>
.callback-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.bg {
    background-image: url('/gradient-background.png');
    background-size: cover;
}
</style>