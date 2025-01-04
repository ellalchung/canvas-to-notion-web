<template>
    <div align="center">
        <v-autocomplete 
            clearable 
            v-model="searchTerm" 
            @input="onInput" 
            @change="onChange" 
            :items="results" 
            :item-title="(item)=>item.name" 
            :item-value="(item)=>item.id"
            return-object
            variant="outlined"/>
    </div>
</template>

<script>
import { notionSearch } from '../services/api/Notion/search.js'
import { useAuthStore } from '@/stores/auth/authStore';

export default {
    name: 'NotionSearch',
    data() {
        return {
            results: [],
            searchTerm: "",
            selectedId: null,
            selectedName: null
        }
    },
    computed: {
    },
    methods: {
        async onInput() {
            if(this.searchTerm == null) {
                return;
            }
            try {
                const response = await notionSearch(this.searchTerm)
                const results = response?.data?.data?.results || [];
                this.results = results.map(item => ({name: item.title[0].plain_text, id: item.id}));;
            } catch (error) {
                console.error("Error fetching search results:", error)
            }
        },
        onChange(value) {
            if(this.searchTerm == null || this.searchTerm == "") {
                return;
            }

            try {
                this.selectedName = this.searchTerm.name;
                this.selectedId = this.searchTerm.id
                const authStore = useAuthStore();
                authStore.setDatabaseId(this.selectedId);
            } catch(error){
                console.error("Error selecting database in search: ", error)
            }

        }
    }
}
</script>