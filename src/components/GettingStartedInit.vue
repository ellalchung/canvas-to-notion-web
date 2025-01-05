<template>
    <v-container>
    <div align="center">
        <h1>getting started</h1>
        <v-spacer class="pa-2"/>
        <v-card @click="selectCreateNew" align="start" class="glow-card" variant="outlined" width="400px">
            <v-card-item>
                <v-card-title>
                    create new template
                </v-card-title>
                <v-card-subtitle>
                    recommended for first-time users. creates new page
                    <br> and database.
                </v-card-subtitle>
            </v-card-item>
        </v-card>
        <v-spacer class="pa-4"/>
        <v-card @click="selectAddTo" align="start" class="glow-card" variant="outlined" width="400px">
            <v-card-item>
                <v-card-title>
                    add to template
                </v-card-title>
                <v-card-subtitle>
                    recommended for returning users. adds courses to an <br> 
                    existing database.
                </v-card-subtitle>
            </v-card-item>
        </v-card>
    </div>
</v-container>
</template>

<script lang="ts">

export default {
    name: "GettingStartedInit",
    data() {
        return {
            
        };
    },
    methods: {
        selectCreateNew() {
            this.$emit('selectOption', "CreateNewTemplate");
        },
        selectAddTo() {
            this.$emit('selectOption', "AddToTemplate");
        }
    }
}
</script>


<style scoped>
.glow-card {
    border: 2px solid #CCD3F0;
  box-shadow: 0 0 10px 4px rgba(204, 211, 240, 0.8); 
  border-radius: 8px; 
}

.glow-card:hover {
  box-shadow: 0 0 15px 6px rgba(204, 211, 240, 1.0);
}
</style>