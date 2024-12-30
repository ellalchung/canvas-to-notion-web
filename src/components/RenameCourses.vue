<template>
    <div style="width: 80%; height: 80%; top: 0;" justify="center">
        <v-row>
            <v-col class="pa-0" cols="3">
                <h1 class="py-4">start date</h1>
            </v-col>
            <v-col cols="9">
                <v-date-input label="Date input" variant="outlined"></v-date-input>
            </v-col>
        </v-row>
        <v-row>
            <h1>rename courses</h1>
        </v-row>
        <div style="width: 100%; height: 70%; overflow: auto;">
            <v-row style="width: 100%;" class="py-6">
            <v-list style="width: 100%;">
                <v-list-item v-for="item in items">
                    <v-row>
                        <v-col cols="6" class="py-7">
                        <v-list-item-title> {{ item }}</v-list-item-title>
                        </v-col>
                        <v-col cols="6">
                            <v-text-field variant="outlined"></v-text-field>
                        </v-col>
                    </v-row>
                </v-list-item>
            </v-list>
            </v-row>
        </div>
    </div>
</template>

<script>
import { useAuthStore } from '@/stores/auth/authStore';

export default {
    name: 'RenameCourses',
    data() {
        return {
            items: []
        }
    },
    mounted() {
        const authStore = useAuthStore();
        this.items = authStore.getCourses
    }
}
</script>