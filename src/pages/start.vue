<script setup lang="ts">
import InputCalLink from '@/components/InputCalLink.vue';
import NotionLogin from '@/components/NotionLogin.vue';
import RenameCourses from '@/components/RenameCourses.vue';
import Sidebar from '@/components/Sidebar.vue';
</script>

<template>
    <v-main class="bg">
        <v-container>
            <v-row class="centered-page">
                <v-col cols="3">
                    <v-card elevation="12" class="centered-content rounded-xl" height="70vh">
                        <sidebar></sidebar>
                    </v-card>
                </v-col>

                <v-col cols="9">
                    <v-card elevation="12" class="centered-content rounded-xl" height="70vh">
                        <keep-alive>
                            <component :is="component" />
                        </keep-alive>
                        <div style="position: absolute; bottom: 0; left: 0; width: 100%;" class="pa-10">
                            <v-row>
                                <v-col align="start">
                                    <v-btn @click="navigate(-1)" variant="text" prepend-icon="fa-light fa-arrow-left" class="text-none"> back </v-btn>
                                </v-col>
                                <v-col align="end">
                                    <v-btn @click="navigate(1)" variant="text" append-icon="fa-light fa-arrow-right" class="text-none"> next </v-btn>
                                </v-col>
                            </v-row>
                        </div>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-main>
</template>

<script lang="ts">
export default {
    components: {
        InputCalLink,
        NotionLogin,
        RenameCourses,
        Sidebar
    },
    data() {
        return {
            component: 'InputCalLink',
            currentStep: 0,
            steps: [
                {component: "InputCalLink"},
                {component: "NotionLogin"},
                {component: "RenameCourses"}
            ],
        }
    },
    methods: {
        goToHome() {
            this.$router.push("/");
        },
        navigate(direction: number) {
            const newStep = this.currentStep + direction;
            if (newStep === -1) {
                this.goToHome();
            }
            if (newStep >= 0 && newStep < this.steps.length) {
                this.currentStep = newStep;
                this.component = this.steps[this.currentStep].component;
        }
    }
}
}
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

.bg {
    background-image: url('gradient-background.png');
    background-size: cover;
}
</style>