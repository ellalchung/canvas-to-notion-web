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
                    <v-card elevation="12" class="centered-content rounded-xl" height="70vh">
                        <keep-alive>
                            <component :is="component" @validNext="handleValidNext" />
                        </keep-alive>
                        <div style="position: absolute; bottom: 0; left: 0; width: 100%;" class="pa-10">
                            <v-row>
                                <v-col align="start" justify="center" class="pa-0">
                                    <v-btn @click="navigate(-1)" variant="text" prepend-icon="fa-light fa-arrow-left" class="text-none"> back </v-btn>
                                </v-col>
                                <div v-if="currentStep!=3">
                                <v-col align="end" justify="center" class="pa-0">
                                    <v-btn @click="navigate(1)" variant="text" append-icon="fa-light fa-arrow-right" class="text-none" :disabled="!validNext"> next </v-btn>
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
        Sidebar
    },
    data() {
        return {
            component: 'NotionLogin',
            currentStep: 0,
            steps: [
                {text: 'log into Notion', component: "NotionLogin", icon: "fa-solid fa-right-to-bracket", show: true},
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
        navigate(direction: number) {
            const newStep = this.currentStep + direction;
            if (newStep === -1) {
                this.goToHome();
            }
            if (newStep >= 0 && newStep < this.steps.length) {
                this.currentStep = newStep;
                this.component = this.steps[this.currentStep].component;
            }
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