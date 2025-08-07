<template>
    <div class="header">
        <div @click="goToHome" style="cursor: pointer;">
            <h1>course sync</h1>
        </div>
        <div class="header-links">
            <h3> about </h3>
            <h3> help </h3>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'Header',
    methods: {
        goToHome() {
            this.$router.push("/");
        }
    }
}
</script>

<style scoped>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 85%;
}

.header-links {
    display: flex;
    gap: 50px
}

</style>