<template>
    <div align="center">
        <div v-if="isAuthenticated">
            Welcome
            <v-btn @click="getUser"></v-btn>
        </div>
        <div v-else>
            <h1>log into Notion</h1>
            <v-btn color="primary" class="text-none" @click="redirectToNotionAuth">authenticate</v-btn>
        </div>
    </div>
</template>

<script>
import { useAuthStore } from '@/stores/auth/authStore';
import { getUserName } from '@/services/api/Notion/user';
import {createPage} from '@/services/api/Notion/pages';
import { getUser } from '@notionhq/client/build/src/api-endpoints';

export default {
    name: 'NotionLogin',
    data() {
        return {
            userName: '',
            isAuth: false
        }
    },
    watch: {
        async isAuth(newValue) {
            if(newValue) {
                await getUserName();
                const authStore = useAuthStore();
                this.userName = authStore.userName;
            }
        }
    },
    computed: {
        isAuthenticated() {
            const authStore = useAuthStore();
            this.isAuth = true;
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
        createPage() {
            createPage();
        },
        async getUserName(){
            let name = await getUserName();
            this.userName = name
        }
    }
}
</script>