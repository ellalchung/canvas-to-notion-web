<template>
    <div class="done-container">
        <h1 style="width: 50%;" align="center">Your assignments have been successfully added to your Notion page!</h1>
        <div class="pa-4">
            <v-btn color="primary" class="text-none ma-2" @click="navigateToNotion">Go to Notion</v-btn>
            <v-btn color="primary" class="text-none ma-2" @click="returnToStart">Return to Home</v-btn>
        </div>
   </div>
</template>

<script>
export default {
    name: 'Done',
    methods: {
        navigateToNotion() {
            window.open('https://www.notion.so', '_blank');
        },
        returnToStart() {
            this.$router.push('/');
        }
    }
};
</script>

<style scoped>
.done-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    flex-direction: column;
}
</style>