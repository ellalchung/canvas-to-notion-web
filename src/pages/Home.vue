<template>
    <div class="centered-page">
        <div class="content actions">
            <h1>start the semester right</h1>
            <h3 class="pb-4">create your assignment master list</h3>
            <v-btn @click="goToStart" class="text-none" variant="flat" color="primary"> start now </v-btn>
        </div>
        <div class="content image-layer">
            <img src="/HomeDemo.png" alt="Landing Image" />
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        goToStart() {
            this.$router.push("/getting-started");
        }
    }
};
</script>

<style scoped>
.centered-page {
    position: relative;
    width: 100vw;
    height: 100vh;
}

.content {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}

.actions {
    left: 0;
    margin-left: 10vw;
    z-index: 1
}

.image-layer {
    right: 0;
    z-index: 0;
    img {
        max-height: 100vh;
        max-width: 90vw;
    }
}
</style>