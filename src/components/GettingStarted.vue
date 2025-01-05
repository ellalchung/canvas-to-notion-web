<template>
    <div v-if="currentStep === 'GettingStartedInit'">
        <GettingStartedInit/>
    </div>
</template>

<script lang="ts">
import { components } from 'vuetify/dist/vuetify-labs.js';
import GettingStartedInit from './GettingStartedInit.vue';

export default {
    name: "GettingStarted",
    components: {GettingStartedInit},
    data() {
        return {
            currentStep: 'GettingStartedInit'
        };
    },
    methods: {
        selectOption(option: string) {
            this.currentStep = option;
        }
    }
}
</script>



<style scoped>
.image {
  max-height: 40vh;
  max-width: 20vw;
}
</style>