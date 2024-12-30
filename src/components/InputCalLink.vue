<template>
    <div style="width: 80%;" align="center">
        <div align="start">
            <h1>canvas calendar link</h1>
            <v-text-field clearable color="green" :rules=[checkLink] :errorMessages=[errorMessage] hint="Open Canvas, navigate to your Calendar, select on 'Calendar Feed', and paste the calendar link here" v-model="calLink" variant="outlined"/>
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
import { useAuthStore } from '@/stores/auth/authStore';

export default {
    name: 'InputCalLink',
    data: ()=> ({
        calLink: "",
        errorMessage: "",
        courses: "",
        assignments: "",
        isValidLink: false,
        loading: false,
        isComplete: false
    }),
    methods: {
        goToHome() {
            this.$router.push("/");
        },
        reset(val) {
            if(!this.isComplete && (this.calLink != val)) {
                this.errorMessage = ""
                this.courses = ""
                this.assignments = ""
                this.isValidLink = false
                this.loading = false
                this.isComplete = false

                const authStore = useAuthStore();
                authStore.setAssignments(Array());
                authStore.setCourses(Array());
            }
        },
        async checkLink(url) {
            const canvasDomain = 'canvas.eee.uci.edu'; // only allow uci right now

            if (url == '') {
                this.errorMessage = '';
                return true;
            } else if (!url.includes(canvasDomain)) {
                this.errorMessage = 'Please use a Canvas calendar link';
                return false;
            } else if (!url.includes('.ics')) {
                this.errorMessage = 'Invalid Canvas calendar link structure, is not ics file';
                return false;
            } else {
                this.calLink = url;
                this.isValidLink = true;
                return true;
            }
        },
        async parseAssignments() {
            this.loading = true;
            try {
                await parseAssignments(this.calLink);
                this.errorMessage = '';
                this.loading = false;
                this.isComplete = true;
                console.log('done')
            } catch (error) {
                this.errorMessage = `error parsing assignmnets: ${error}`
            }
        },
        getCourseAssignments() {
            const authStore = useAuthStore();
            this.courses = authStore.getCourses;
            this.assignments = authStore.getAssignments;
        }
        
    },

}
</script>