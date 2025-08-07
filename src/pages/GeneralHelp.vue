<template>
    <div class="centered-page bg">
        <h2 class="pa-5">
            join the Notion Canvas community on Discord for help, feedback, and updates!
        </h2>
        <v-btn @click="goToDiscord" color="primary"> join now </v-btn>
    </div>
</template>

<script lang="ts">
export default {
    name: 'GeneralHelp',
    methods: {
        goToDiscord() {
            window.open('https://discord.gg/3vtt9VfjvV', '_blank');
        }
    }
};
</script>

<style scoped>
.centered-page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 150px 200px;
    text-align: center;
    height: 100vh;
}

.bg {
    background-image: url('/gradient-background.png');
    background-size: cover;
}
</style>