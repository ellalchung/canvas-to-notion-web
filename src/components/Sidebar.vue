<template>
    <v-list>
      <v-list-item
          v-for="(step, i) in steps"
          :key="i"
          :value="step"
          :disabled="!step.show"
          color="primary"
          :active="currentStep == i"
          @click="selectStep(i)">
          <v-list-item-title v-text="step.text"></v-list-item-title>
      </v-list-item>
    </v-list>
</template>

<script>
export default {
    props: {
        steps: {
          type: Array,
          required: true
        },
        currentStep: {
          type: Number,
          required: true
        }
    },
    methods: {
      selectStep(index) {
        this.$emit('update-step', index); // update parent component
      }
    },
}
</script>