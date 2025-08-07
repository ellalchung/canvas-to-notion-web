<template>
    <v-container fluid class="bg">
        <div class="content">
            <h1>
                how to get your calendar link
            </h1>
            <p>
                1. Open Canvas and navigate to your Calendar.
            </p>
            <img style="width: 600px" src="/CalendarHelp/step1.png" alt="Canvas dashboard with calednar side bar" />
            <p>
                2. Click on the "Calendar Feed" link in the sidebar.<br>
            </p>
            <img style="width: 600px" src="/CalendarHelp/step2.png" alt="Canvas calendar feed link" />
            <p>
                3. Copy the URL provided in the "Calendar Feed" section.<br>
            </p>
            <img style="width: 600px" src="/CalendarHelp/step3.png" alt="Canvas calendar feed URL" />
            <p>
                4. Paste the copied link into the input field on the previous page.
            </p>

        </div>
    </v-container>
</template>

<script lang="ts">
export default {
    name: 'CalendarHelp'
};
</script>

<style scoped>
.content {
    padding: 100px 50px
}
.bg {
    background-image: url('/gradient-background.png');
    background-size: cover;
}
</style>