<template>
    <div class="rename-courses">
        <div class="header">
            <h1>clean things up</h1>
        </div>
        <div class="content">
            <div class="start-date">
                <h2>start date</h2>
                <v-date-input v-model="startDate" label="date input" hide-details variant="outlined"></v-date-input>
                <v-tooltip v-model="showTooltip">
                    <template v-slot:activator="{ props }">
                        <v-icon class="mdi" v-bind="props" color="gray" :icon="'mdi-help-circle'"></v-icon>
                    </template>
                    <span>Choose the date to start tracking assignments.<br>Recommended: Set the start date as your earliest incomplete assignment.</span>
                </v-tooltip>
            </div>
            <div class="course-names">
                <h2>rename courses</h2>
                <v-list-item v-for="(item, index) in items" :key="index">
                    <v-list-item-title> {{ item }}</v-list-item-title>
                    <v-text-field
                        :key="index"
                        v-model="inputRenamedCourses[index]"
                        placeholder="course code"
                        variant="outlined"
                        clearable
                    ></v-text-field>
                </v-list-item>
            </div>
        </div>
        <v-btn color="primary" class="confirm-btn" @click="saveCourseNames" :disabled="!validSave">save</v-btn>
    </div>
</template>

<script lang="ts">
import { useAuthStore } from '@/stores/auth/authStore';

export default {
    name: 'RenameCourses',
    data() {
        return {
            startDate: new Date(),
            items: [] as string[],
            courseMap: {} as Record<number, string>,
            renamedCourses: {} as Record<number, string>,
            inputRenamedCourses: {} as Record<number, string>,
            savedInput: false,
            validSave: false,
            showTooltip: false
        }
    },
    activated() {
        const authStore = useAuthStore();
        const courseMap = authStore.getCourseMap;
        this.courseMap = courseMap;
        this.items = Object.values(courseMap);

        this.validClickNext()
    },
    watch: {
        inputRenamedCourses: {
            deep: true,
            handler(newVal) {
                const renamedCoursesCount = Object.values(this.inputRenamedCourses).filter(value => value !== "").length;
                const itemsLength = this.items.length;
                this.validSave = (renamedCoursesCount == itemsLength) && !!this.startDate
            }
        }
    },
    methods: {
        saveCourseNames() {
            this.renamedCourses = this.inputRenamedCourses;
            const authStore = useAuthStore();
            authStore.setCourseMap(this.renamedCourses);
            authStore.setCourses(Object.values(this.renamedCourses));
            authStore.setStartDate(this.startDate);
            this.savedInput = true;
            this.validClickNext()
        },
        validClickNext() {
            this.$emit('validNext', this.savedInput);
        }
    },
}
</script>

<style scoped>
.rename-courses {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    width: 90%;
    height: 100%;
    margin-top: 32px;
}

.content {
    display: flex;
    flex-direction: column;
    overflow: auto;
    height: 70%;
    width: 80%;
}

.header {
    h1 {
        font-size: 2rem;
        margin-bottom: 0.5rem;
    }
    p {
        font-size: 1rem;
    }
}

.start-date {
    display: flex;
    align-items: center;
    padding-top: 16px;
    gap: 16px;
    h2 {
        font-size: 1.5rem;
        margin-right: 0.5rem;
    }
}

.confirm-btn {
    margin-top: 16px;
    width: 80%;
    text-transform: lowercase;
}
</style>