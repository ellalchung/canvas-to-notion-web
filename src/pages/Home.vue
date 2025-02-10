<template>
    <v-main class="centered-page">
        <v-container fluid>
            <v-row>
                <v-col class="centered-content" cols="4" xs="12">
                    <div justify="start">
                        <h1>start the semester right</h1>
                        <h3 class="pb-4">create your assignment master list</h3>
                        <v-btn @click="goToStart" class="text-none" variant="flat" color="primary"> start now </v-btn>
                    </div>
                </v-col> 
                <!-- Image layer -->
                <v-col cols="8" xs="12">
                    <div class="image-layer">
                        <img
                        src="/HomeDemo.png"
                        alt="">                        
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </v-main>
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
    display: flex;
    justify-content: center; /* Horizontal centering */
    align-items: center;     /* Vertical centering */
    height: 100vh;           /* Full height of the viewport */
}
.centered-content {
    display: flex;
    justify-content: center; /* Horizontal centering */
    align-items: center;     /* Vertical centering */
    flex-direction: column; /* Stack vertically */
    position: relative;
    z-index: 1;
}
.image-layer {
    position: absolute;
    z-index: 0; /* Image is behind the text */
    object-fit: contain; /* Adjust for how the image fits inside */
    top: 0;
    right: 0;
}

</style>