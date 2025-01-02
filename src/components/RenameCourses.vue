<template>
    <div style="width: 80%; height: 80%; top: 0;" justify="center">
        <v-row>
            <v-col class="pa-0" cols="3">
                <h1 class="py-4">start date</h1>
            </v-col>
            <v-col cols="9">
                <v-date-input v-model="startDate" label="Date input" variant="outlined"></v-date-input>
            </v-col>
        </v-row>
        <v-row>
            <h1>rename courses</h1>
        </v-row>
        <div style="width: 100%; height: 70%; overflow: auto;">
            <v-row style="width: 100%;" class="py-6">
            <v-list style="width: 100%;">
                <v-list-item v-for="(item, index) in items" :key="index">
                    <v-row>
                        <v-col cols="6" class="py-7">
                        <v-list-item-title> {{ item }}</v-list-item-title>
                        </v-col>
                        <v-col cols="6">
                            <v-text-field placeholder="course code" variant="outlined" v-model="inputRenamedCourses[index]"/>
                        </v-col>
                    </v-row>
                </v-list-item>
            </v-list>
            </v-row>
            <div v-if="items.length" class="d-flex justify-center">
                <v-btn color="primary" class="text-none" @click="saveCourseNames" :disabled="!validSave">save</v-btn>
            </div>
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
    },
    watch: {
        inputRenamedCourses: {
            deep: true,
            handler(newVal) {
                console.log(this.inputRenamedCourses)
                const renamedCoursesCount = Object.values(this.inputRenamedCourses).length;
                const itemsLength = this.items.length;
                this.validSave = (renamedCoursesCount == itemsLength)
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
        },
        validClickNext() {
            this.$emit('validNext', this.savedInput);
        },
        // validSave() {
        //     const renamedCoursesCount = Object.values(this.inputRenamedCourses).length;
        //     const itemsLength = this.items.length;
        //     return (renamedCoursesCount == itemsLength)

        // }
    },
    
};
</script>