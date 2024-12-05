<template>
    <v-container>
        <div class="flex m-5">
            <h1 class="flex-1 text-3xl">Users</h1>
            <v-btn class="flex-none"
            variant="outlined"
            @click="handelCreate"
            >
                Agregar usuario
            </v-btn>
        </div>
        <v-card flat>
            <template v-slot:text>
                <v-text-field v-model="search" label="Search" prepend-inner-icon="mdi-magnify" variant="outlined"
                    hide-details single-line></v-text-field>
            </template>
            <v-data-table :headers="userHeaders" :items="users" :search="search">
                <template  #item.actions="{ item }">
                    <v-btn class="m-3" density="comfortable" color="primary" size="small" variant="outlined" @click="handleEdit(item)">Edit</v-btn>
                    <v-btn color="error" density="comfortable" size="small" variant="outlined" @click="handleDelete(item)" >Delete</v-btn>
                </template>
            </v-data-table>
        </v-card>

        <Modal
            v-model="isActive" 
            title="Gestión de Usuarios"
            @close-modal="closeModal"
        >
        <!-- Modal para crear usuario -->
            <NewUserModal 
            v-if="showCreate" 
            @close-modal="closeModal" 
            />

        <!-- Modal para editar usuario -->
            <EdituserModal 
            v-if="showUpdate" 
            :user="selectedUser" 
            @close-modal="closeModal"
            />

        <!-- Modal para eliminar usuario -->
            <DeleteUserModal 
            v-if="showDelete" 
            :user="selectedUser" 
            @close-modal="closeModal"
            />
        </Modal>

    </v-container>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import { useUserStore } from '@/stores/user-store';
import { userHeaders } from '../headers/user-headers';
import Modal from '@/components/Modal.vue';
import NewUserModal from '../modals/NewUserModal.vue';
import EdituserModal from '../modals/EdituserModal.vue';
import DeleteUserModal from '../modals/DeleteUserModal.vue';

const userStore = useUserStore();
const users = computed(() => userStore.users);
const search = ref('');
const showCreate = ref(false);
const showUpdate = ref(false);
const showDelete = ref(false);
const selectedUser = ref(null); 
const isActive = ref(false);

const handelCreate = () => {
    showCreate.value = true
    if (showCreate.value || showUpdate.value || showDelete.value) {
        isActive.value = true;
    }
}
const handleEdit = (user) => {
    selectedUser.value = user;
    showUpdate.value = true
    if (showCreate.value || showUpdate.value || showDelete.value) {
        isActive.value = true;
    }
}

const handleDelete = (user) => {
    selectedUser.value = user;
    showDelete.value = true
    if (showCreate.value || showUpdate.value || showDelete.value) {
        isActive.value = true;
    }
}

const closeModal = async () => {
    showCreate.value = false;
    showUpdate.value = false;
    showDelete.value = false;
    selectedUser.value = null;
    isActive.value = false
    await userStore.fetchAllUsers();
}

onMounted(async () => {
    await userStore.fetchAllUsers();
})


</script>

<style></style>