<template>
    <div>
        <h1 justify="start">confirm selections</h1>
        <div style="width: 100%; height: 70%; overflow: auto;">
            <v-spacer class="py-2"></v-spacer>
            <h2>start date</h2>
            <p>{{ startDate }}</p>
            <v-spacer class="py-2"></v-spacer>
            <h2>assignments</h2>
            <v-data-table :headers="headers" :items="assignments"/>
        </div>
        <v-spacer class="py-2"></v-spacer>
        <div class="d-flex justify-center">
            <v-btn @click="saveAssignments" color="primary" class="text-none">submit</v-btn>
        </div>
    </div>
</template>

<script>
import { useAuthStore } from '@/stores/auth/authStore';
import { createDatabase, createPage } from '@/services/api/Notion/pages';

export default {
    name: 'Submit',
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
            ]
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
            const authStore = useAuthStore();

            const pageId = authStore.getPageId;

            const databaseId = authStore.getDatabaseId || await createDatabase(pageId)
            
            for (let i = 0; i < this.assignments.length; i++) {
                const { name, course, date } = this.assignments[i];
                const assignment = { name, course, date }
                await createPage({databaseId, ...assignment});
            }
        }
    }
};
</script>