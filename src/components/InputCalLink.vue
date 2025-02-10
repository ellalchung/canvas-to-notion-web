<template>
    <div style="width: 80%;" align="center">
        <div align="start">
            <h1>canvas calendar link</h1>
            <v-text-field 
            clearable
            :rules="[rules.checkLink]"
            hint="Open Canvas, navigate to your Calendar, select on 'Calendar Feed', and paste the calendar link here"
            v-model="calLink"
            variant="outlined"/>
        </div>
    <v-btn color="primary" class="text-none" :loading="loading" :disabled="!isValidLink" @click="parseAssignments" width="20%">
        <template v-slot:default>
            <v-icon v-if="isComplete">fa-solid fa-check</v-icon>
            <span v-else>confirm</span>
        </template>
    </v-btn>
    </div>
</template>

<script>
import { parseAssignments } from '../services/api/icalParser.js';

export default {
    name: 'InputCalLink',
    data: ()=> ({
        calLink: "",
        errorMessage: null,
        isValidLink: false,
        loading: false,
        isComplete: false,
        rules: {
            checkLink: value => {
                const canvasDomain = 'canvas.eee.uci.edu';
                if (value == false) return 'required'; 
                if (!value.includes(canvasDomain)) {
                    return 'Please use a Canvas calendar link.';
                    }
                if (!value.includes('.ics')) {
                    return 'Invalid Canvas calendar link structure (not an .ics file).';
                    }
                return true;
            }
        }
    }),
    activated() {
        this.validClickNext();
    },
    watch: {
        calLink(value) {
            this.isValidLink = this.rules.checkLink(value) == true;
        }
    },
    mounted() {
        this.validClickNext();
    },
    methods: {
        goToHome() {
            this.$router.push("/");
        },
        onReset() {
            if(this.isComplete) {
                this.errorMessage = ""
                this.isValidLink = false
                this.loading = false
                this.isComplete = false
            }
        },
        async parseAssignments() {
            this.loading = true;
            try {
                await parseAssignments(this.calLink);
                this.errorMessage = '';
                this.loading = false;
                this.isComplete = true;

                this.validClickNext()
            } catch (error) {
                this.errorMessage = `error parsing assignmnets: ${error}`
            }
        },
        validClickNext() {
            this.$emit('validNext', this.isValidLink);
        }
    },

}
</script>