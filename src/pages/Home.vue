<template>
    <div class="centered-page">
        <div class="actions">
            <h1>start the semester right</h1>
            <h3 class="pb-4">create your assignment master list</h3>
            <v-btn @click="goToStart" class="text-none" variant="flat" color="primary"> start now </v-btn>
        </div>
        <div class="image-layer">
            <img class="foreground" src="/windows.png"/>
            <img class="background" src="/radial.png"/>
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
    display: flex;
    justify-content: space-between; 
    align-items: center;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
}

.actions {
    left: 0;
    margin-left: 10vw;
    z-index: 2
}

.image-layer {
    position: absolute;
    display: flex;
    right: 0;

    .background {
        position: relative;
        right: 0;
        top: 0;
        z-index: 0;
        height: 100vh;
        img {
            object-fit: cover;
        }
    }

    .foreground {
        position: absolute;
        top: 100px;
        right: 100px;
        max-width: 700px;
        z-index: 1;          
    }
}

@media (max-width: 768px) {
    .centered-page {
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .actions {
        position: absolute;
        top: 15%;
        left: 25%;
        margin-left: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .image-layer {
        .foreground {
            width: 600px;
            top: 30%;
        }
    }
}
</style>