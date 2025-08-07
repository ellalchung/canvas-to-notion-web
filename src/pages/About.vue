<template>
    <div class="bg centered-page">
        <h2>
            If you're the kind of student who likes to start the semester strong by organizing a master list of your assignements — this tool is for you!<br>It pulls all of your assignments from Canvas and formats them into a clean Notion database so you can plan, track, and stay ahead.
        </h2>

        <p>
        This works best if your professors have already added all assignments to Canvas at the start of the term.
        </p>
        <v-spacer class="py-5"></v-spacer>
        <h2>
        Built with simplicity and productivity in mind. We believe that getting organized shouldn't be a chore.
        </h2>
        <v-spacer class="py-5"></v-spacer>
        <img src="/About/notion.png"/>
        <v-spacer class="py-5"></v-spacer>

        <h2>
            created by a former notion campus leader at uci
        </h2>

        <p>
            this website is not endorsed or affiliated with Notion or Canvas. it was created as a passion project to help students streamline their workflow and stay organized.
        </p>
    </div>
</template>

<script lang="ts">
export default {
    name: 'About'
};
</script>

<style scoped>
.centered-page {
    padding: 150px 200px;
}

.bg {
    background-image: url('/gradient-background.png');
    background-size: cover;
}
</style>