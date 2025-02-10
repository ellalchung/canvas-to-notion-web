<template>
    <div class="main-container">
        <v-row>
            <v-col cols="3">
                <h1 class="py-2">start date</h1>
            </v-col>
            <v-col cols="9">
                <v-date-input v-model="startDate" label="Date input" variant="outlined"></v-date-input>
            </v-col>
        </v-row>
        <h1 class="py-2">rename courses</h1>
        <div class="content-container">
            <v-row style="width: 100%;">
            <v-list style="width: 100%;">
                <v-list-item v-for="(item, index) in items" :key="index">
                    <v-row>
                        <v-col cols="6">
                        <v-list-item-title> {{ item }}</v-list-item-title>
                        </v-col>
                        <v-col cols="6">
                            <v-text-field placeholder="course code" variant="outlined" v-model="inputRenamedCourses[index]"/>
                        </v-col>
                    </v-row>
                </v-list-item>
            </v-list>
            </v-row>
        </div>
        <div class="d-flex justify-center">
            <v-btn color="primary" class="text-none ma-2" @click="saveCourseNames" :disabled="!validSave">save</v-btn>
        </div>
    </div>
</template>

<script>
import { useAuthStore } from '@/stores/auth/authStore';

export default {
    name: 'RenameCourses',
    data() {
        return {
            startDate: null,
            items: [],
            courseMap: {},
            renamedCourses: {},
            inputRenamedCourses: {},
            savedInput: false,
            validSave: false
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
};
</script>

<style scoped>
.main-container {
    display: flex;
    flex-direction: column;
    height: 80%;
    width: 80%;
}

.content-container {
    overflow-y: auto;
}
</style>