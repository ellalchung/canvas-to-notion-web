<template>
    <div align="center">
        <div v-if="isAuthenticated">
            <h1> Welcome! </h1>
            <h3> Access granted to {{ workspaceName }} </h3>
        </div>
        <div v-else>
            <h1>log into Notion</h1>
            <v-btn color="primary" class="text-none" @click="redirectToNotionAuth">authenticate</v-btn>
        </div>
    </div>
</template>

<script>
import { useAuthStore } from '@/stores/auth/authStore';

export default {
    name: 'NotionLogin',
    data() {
        return {
            userName: '',
            workspaceName: '',
            isAuth: false
        }
    },
    computed: {
        isAuthenticated() {
            const authStore = useAuthStore();
            this.isAuth = authStore.isAuthenticated;
            this.workspaceName = authStore.getWorkspaceName;

            this.validClickNext()
            
            return authStore.isAuthenticated;
        }
    },
    methods: {
        redirectToNotionAuth() {
            const clientId = import.meta.env.VITE_APP_NOTION_CLIENT_ID;
            const redirectUri = 'http://localhost:3000/callback';
            const notionAuthUrl = import.meta.env.VITE_APP_AUTH_URL;
            window.location.href = notionAuthUrl;
        },
        validClickNext() {
            this.$emit('validNext', this.isAuth)
        }
    }
}
</script>