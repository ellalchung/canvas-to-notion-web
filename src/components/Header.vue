<template>
    <div class="header">
        <div @click="goToHome" style="cursor: pointer;">
            <h1>course sync</h1>
        </div>
        <div class="header-links">
            <div @click="goToAbout" style="cursor: pointer;">
                <h3>about</h3>
            </div>
            <div @click="goToHelp" style="cursor: pointer;">
                <h3>help</h3>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'Header',
    methods: {
        goToHome() {
            this.$router.push("/");
        },
        goToAbout() {
            this.$router.push("/about");
        },
        goToHelp() {
            this.$router.push("/help");
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