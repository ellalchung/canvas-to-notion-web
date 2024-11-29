<template>
    <div style="width: 80%;">
        <h1>canvas calendar link</h1>
        <v-text-field clearable hint="Open Canvas, navigate to your Calendar, select on 'Calendar Feed', and paste the calendar link here" v-model="calLink" variant="outlined">
        </v-text-field>
    </div>
</template>

<script>
export default {
    data: ()=> ({
        calLink: ""
    }),
    methods: {
        goToHome() {
            this.$router.push("/");
        }
    }
}
</script>