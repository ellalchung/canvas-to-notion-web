<template>
    <div align="center">
        <h1>log into Notion</h1>
        <v-btn color="primary" class="text-none" @click="redirectToNotionAuth">authenticate</v-btn>
    </div>
</template>

<script>
export default {
    name: 'NotionLogin',
    methods: {
        redirectToNotionAuth() {
            const clientId = import.meta.env.VITE_APP_NOTION_CLIENT_ID;
            const redirectUri = 'http://localhost:3000/callback';
            const notionAuthUrl = import.meta.env.VITE_APP_AUTH_URL;
            window.location.href = notionAuthUrl;
        }
    }
}
</script>