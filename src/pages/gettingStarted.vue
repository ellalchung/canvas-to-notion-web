<template>
    <v-main class="bg">
        <v-container>
            <v-row class="centered-page">
                <v-col cols="3">
                    <v-card elevation="12" class="centered-content rounded-xl" height="70vh">
                        <Sidebar
                            :steps="steps"
                            :currentStep="currentStep"
                            @update-step="updateStep"/>
                    </v-card>
                </v-col>

                <v-col cols="9">
                    <v-card elevation="12" class="centered-content rounded-xl" style="height: 70vh;" >
                            <GettingStarted/>
                        <div style="position: absolute; bottom: 0; left: 0; width: 100%;" class="px-10 pb-10">
                            <v-row>
                                <v-col align="start" justify="center" class="pa-0">
                                    <v-btn @click="goToHome" variant="text" prepend-icon="fa-light fa-arrow-left" class="text-none"> back </v-btn>
                                </v-col>
                                <div v-if="currentStep!=3">
                                <v-col align="end" justify="center" class="pa-0">
                                    <v-btn @click="goToSetup" variant="text" append-icon="fa-light fa-arrow-right" class="text-none"> next </v-btn>
                                </v-col>
                                </div>
                            </v-row>
                        </div>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-main>
</template>

<script lang="ts">
import GettingStarted from '@/components/GettingStarted.vue';
import InputCalLink from '@/components/InputCalLink.vue';
import NotionLogin from '@/components/NotionLogin.vue';
import RenameCourses from '@/components/RenameCourses.vue';
import Sidebar from '@/components/Sidebar.vue';
import Submit from '@/components/Submit.vue';

export default {
    components: {
        InputCalLink,
        NotionLogin,
        RenameCourses,
        Submit,
        GettingStarted,
        Sidebar
    },
    data() {
        return {
            component: 'GettingStarted',
            currentStep: 0,
            steps: [
                {text: 'getting started', component: "GettingStarted", icon: "fa-solid fa-right-to-bracket", show: true},
                {text: 'log into Notion', component: "NotionLogin", icon: "fa-solid fa-right-to-bracket", show: false},
                {text: 'import assignments', component: "InputCalLink", icon: "fa-solid fa-file-import", show: false},
                {text: 'edit', component: "RenameCourses", icon: "fa-solid fa-pen-to-square", show: false},
                {text: 'submit', component: "Submit", icon: "fa-solid fa-circle-check", show: false}
            ],
            validNext: false
        }
    },
    methods: {
        goToHome() {
            this.$router.push("/");
        },
        goToSetup(){
            this.$router.push("/setup");
        },
        updateStep(index: number) {
            this.currentStep=index;
            this.component=this.steps[this.currentStep].component;
        },
        handleValidNext(display: boolean) {
            this.validNext = display;
            if (this.currentStep + 1 < this.steps.length) {
                this.steps[this.currentStep + 1].show = display;
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