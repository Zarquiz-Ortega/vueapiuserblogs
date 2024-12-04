<template>
    <v-container>
        <v-card class="text-2xl" title="Post" flat>
            <template v-slot:text>
                <v-text-field v-model="search" label="Search" prepend-inner-icon="mdi-magnify" variant="outlined"
                    hide-details single-line></v-text-field>
            </template>
            <v-data-table :headers="headers" :items="desserts" :search="search"></v-data-table>
        </v-card>
    </v-container>
</template>

<script setup>

</script>

<style>

</style>