<template>
    <v-container>
        <div class="flex m-5">
            <h1 class="flex-1 text-3xl">Users</h1>
            <v-btn class="flex-none"
            prepend-icon="$vuetify" 
            variant="outlined"
            @click="openModal"
            >
                Button
            </v-btn>
        </div>
        <v-card flat>
            
            <template v-slot:text>
                <v-text-field v-model="search" label="Search" prepend-inner-icon="mdi-magnify" variant="outlined"
                    hide-details single-line></v-text-field>
            </template>

            <v-data-table :headers="userHeaders" :items="users" :search="search"></v-data-table>
        </v-card>
        <Modal :show="show" @close-modal="closeModal"></Modal>
    </v-container>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useUserStore } from '@/stores/user-store';
import { userHeaders } from '../headers/user-headers';
import Modal from '@/components/Modal.vue';

const users = ref();
const userStore = useUserStore();
const search = ref('');
const show = ref(false);

const openModal = () => show.value = true

const closeModal = () => show.value = false

onMounted(async () => {
    await userStore.fetchAllUsers();
    users.value = userStore.users
})

</script>

<style></style>