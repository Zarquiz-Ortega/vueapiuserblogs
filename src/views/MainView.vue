<template>
    <Sidebar></Sidebar>
    <v-container>
        <router-view></router-view>
    </v-container>
</template>

<script setup>
import Sidebar from '@/components/Sidebar.vue';
</script>

<style scoped>

</style>