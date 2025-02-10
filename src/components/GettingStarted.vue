<template>
    <div v-if="currentStep === 'GettingStartedInit'">
        <GettingStartedInit @selectOption="selectOption"/>
    </div>

    <div v-if="currentStep === 'CreateNewTemplate'">
        <CreateNewTemplate/>
    </div>

    <div v-if="currentStep === 'AddToTemplate'">
        <AddToTemplate/>
    </div>
    
</template>

<script lang="ts">
import GettingStartedInit from './GettingStartedInit.vue';
import CreateNewTemplate from './CreateNewTemplate.vue';
import AddToTemplate from './AddToTemplate.vue';

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
            this.$emit('validNext', true)
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