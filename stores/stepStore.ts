// stores/stepStore.ts
import { defineStore } from 'pinia'

export const useStepStore = defineStore("stepStore", {
  state: () => ({
    currentStep: 0,
    steps: [
      { label: "import Canvas calendar link", component: "InputCalLink" },
      { label: "log into Notion", component: "NotionLogin" },
      { label: "edit course name", component: "RenameCourses" },
    ],
  }),
  actions: {
    nextStep() {
      if (this.currentStep < (this.steps.length-1)) {
        this.currentStep++;
      }
    },
    previousStep() {
      if (this.currentStep > 0) {
        this.currentStep--;
      }
    },
    goToStep(step: number) {
      if (step >= 1 && step <= this.steps.length) {
        this.currentStep = step;
      }
    }
  },
});
