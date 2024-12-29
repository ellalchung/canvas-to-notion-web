<template>
    <div style="width: 80%;">
        <h1>canvas calendar link</h1>
        <v-text-field clearable :rules=[isLinkValid] :errorMessages=[errorMessage] hint="Open Canvas, navigate to your Calendar, select on 'Calendar Feed', and paste the calendar link here" v-model="calLink" variant="outlined">
        </v-text-field>
    </div>
</template>

<script>
import { parseAssignments } from '../services/api/icalParser.js';

export default {
    name: 'InputCalLink',
    data: ()=> ({
        calLink: "",
        errorMessage: ""
    }),
    methods: {
        goToHome() {
            this.$router.push("/");
        },
        onChange(val) {
            isLinkValid(val)
        },
        async isLinkValid(url) {
            const canvasDomain = 'canvas.eee.uci.edu'; // only allow uci right now
            if (!url.includes(canvasDomain)) {
                this.errorMessage = 'use a canvas calendar link'
                return false;
            } else {
                try {
                    let result = parseAssignments(url);
                    console.log(result)
                    return true;
                } catch (error) {
                    this.errorMessage = `error parsing assignmnets: ${error}`
                    return false;
                }
            }

        }
    },

}
</script>