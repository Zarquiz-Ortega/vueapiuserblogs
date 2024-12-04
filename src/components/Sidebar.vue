<template>
    <v-navigation-drawer>
        <v-list-item title="Menu"></v-list-item>
        <v-divider></v-divider>
        <v-list-item v-for="(item, index) in nav" :key="index">
            <router-link :to="item.path">{{ item.title }}</router-link>
        </v-list-item>
    </v-navigation-drawer>
</template>
<script setup>
import { nav } from './menu/nav';
</script>

<style scoped>
.v-list-item__content{
    font-size: 1.3;
}
</style>