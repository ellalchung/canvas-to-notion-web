<template>
    <div v-if="!done" class="submit-container">
        <h1 justify="start">confirm selections</h1>
        <div class="content-container">
            <v-spacer class="py-2"></v-spacer>
            <h2>start date</h2>
            <p>{{ startDate }}</p>
            <v-spacer class="py-2"></v-spacer>
            <h2>assignments</h2>
            <v-data-table :headers="headers" :items="assignments"/>
        </div>
        <div class="d-flex justify-center">
            <v-btn @click="saveAssignments" color="primary" class="text-none ma-2">
                <template v-slot:default>
                    <v-icon v-if="done">fa-solid fa-check</v-icon>
                    <span v-if="loading">
                        <v-progress-circular class="pa-4" indeterminate color="white" size="20"></v-progress-circular>
                        adding to notion
                    </span>
                    <span v-else>submit</span>
                </template>
            </v-btn>
        </div>
    </div>
    <div v-if="done" class="d-flex justify-center">
        <Done/>
    </div>
</template>

<script>
import { useAuthStore } from '@/stores/auth/authStore';
import { createDatabase, createPage } from '@/services/api/Notion/pages';
import Done from './Done.vue';

export default {
    name: 'Submit',
    components: { Done },
    data() {
        return {
            startDate: null,
            courses: [],
            assignments: [],
            headers: [
                {title: 'Assignment Name',
                    align: 'start',
                    sortable: true,
                    key: 'name'
                },
                {title: 'Due Date',
                    align: 'start',
                    sortable: true,
                    key: 'date'
                },
                {title: 'Courses',
                    align: 'start',
                    sortable: true,
                    key: 'course'
                }
            ],
            loading: false,
            done: false
        }
    },
    activated() {
        const authStore = useAuthStore();
        this.startDate = authStore.getStartDate;
        const courseMap = authStore.getCourseMap;
        this.assignments = [];

        const assignments = authStore.getAssignments;

        for (let i = 0; i<assignments.length; i++){
            const dateObject = new Date(assignments[i].date)
            if(this.startDate <= dateObject) {
                const courseNumber = assignments[i].courseNo;
                const courseName = courseMap[courseNumber];
            
                assignments[i].course = courseName;
                this.assignments.push(assignments[i])
            }
        }
    },
    methods: {
        async saveAssignments() {
            this.loading = true;
            const authStore = useAuthStore();

            const pageId = authStore.getPageId;

            const databaseId = authStore.getDatabaseId || await createDatabase(pageId)
            
            for (let i = 0; i < this.assignments.length; i++) {
                const { name, course, date } = this.assignments[i];
                const assignment = { name, course, date }
                await createPage({databaseId, ...assignment});
            }
            this.loading = false;
            this.done = true;
        }
    }
};
</script>

<style scoped>
.submit-container {
    display: flex;
    flex-direction: column;
    height: 80%;
    width: 80%;
    overflow: hidden;
}

.content-container {
    flex: 1;
    overflow-y: auto;
}
</style>