<template>
    <div>
      <h1>Authenticating...</h1>
    </div>
  </template>
  
<script>
import { useAuthStore } from '@/stores/auth/authStore';
import axios from 'axios';

export default {
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
    }
    }
  },
};
</script>
