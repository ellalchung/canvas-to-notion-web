<template>
    <div style="width: 80%;" align="center">
        <div align="start">
            <h1>canvas calendar link</h1>
            <v-text-field 
            clearable
            :rules="rules"
            :error="!!errorMessage"
            :error-messages="errorMessage ? [errorMessage] : []"
            hint="Open Canvas, navigate to your Calendar, select on 'Calendar Feed', and paste the calendar link here"
            v-model="calLink"
            variant="outlined"/>
        </div>
    <v-btn color="primary" class="text-none" :loading="loading" :disabled="!isValidLink" @click="parseAssignments" width="20%">
        confirm
    </v-btn>
    </div>
</template>

<script>
import { parseAssignments } from '../services/api/icalParser.js';
import { useAuthStore } from '@/stores/auth/authStore';

export default {
    name: 'InputCalLink',
    data: ()=> ({
        calLink: "",
        errorMessage: null,
        isValidLink: false,
        loading: false,
        isComplete: false,
    }),
    activated() {
        this.validClickNext();
    },
    watch: {
        calLink(value) {
            if (this.errorMessage) {
                this.errorMessage = null;
            }

            const results = this.rules.map(rule => rule(value));
            this.isValidLink = results.every(r => r === true);
        }
    },
    mounted() {
        this.validClickNext();
    },
    computed: {
        rules() {
            const canvasDomain = "canvas.eee.uci.edu";
            return [
                value => !!value || "Required",
                value => value.includes(canvasDomain) || "Please use a Canvas calendar link.",
                value => value.includes(".ics") || "Invalid Canvas calendar link structure (not an .ics file).",
            ];
        },
    },
    methods: {
        goToHome() {
            this.$router.push("/");
        },
        async parseAssignments() {
            this.loading = true;
            try {
                await parseAssignments(this.calLink);
                const authStore = useAuthStore();

                if(authStore.getCourseMap) {
                    this.errorMessage = '';
                    this.loading = false;
                    this.isComplete = true;

                    this.validClickNext()
                } else {
                    this.errorMessage = 'No assignments found in the calendar link. Please check the link and try again.';
                    this.loading = false;
                    this.isComplete = false;
                    this.isValidLink = false;
                }
            } catch (error) {
                this.loading = false;
                this.isValidLink = false;
                this.errorMessage = `Invalid calendar link or no assignments found. Please check the link and try again.`;
            }
        },
        validClickNext() {
            this.$emit('validNext', this.isValidLink);
        }
    },

}
</script>