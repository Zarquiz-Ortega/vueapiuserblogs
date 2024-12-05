<template>
    <v-container>
        <div class="flex m-5">
            <h1 class="flex-1 text-3xl">Post</h1>
            <v-btn class="flex-none"
            variant="outlined"
            @click="handelCreate"
            >
                Agregar Post
            </v-btn>
        </div>
        <v-card flat>
            <template v-slot:text>
                <v-text-field v-model="search" label="Search" prepend-inner-icon="mdi-magnify" variant="outlined"
                    hide-details single-line></v-text-field>
            </template>
            <v-data-table :headers="postHeaders" :items="posts" :search="search">
                <template  #item.actions="{ item }">
                    <v-btn class="mx-2" density="comfortable" color="primary" size="small"  @click="handleEdit(item)">Edit</v-btn>
                    <v-btn class="mx-2" color="error" density="comfortable" size="small"  @click="handleDelete(item)" >Delete</v-btn>
                </template>
            </v-data-table>
        </v-card>

        <Modal
            v-model="isActive" 
            title="Gestión de Post"
            @close-modal="closeModal"
        >
    
        <NewPostModal
        v-if="showCreate"
        @close-modal="closeModal"
        ></NewPostModal>

        <EditPostModal
        v-if="showUpdate"
        :post="selectedPost"
        @close-modal="closeModal"
        ></EditPostModal>
    
        </Modal>

    </v-container>
</template>

<script setup>
import { usePostStore } from '@/stores/post-store';
import { computed, onMounted, ref } from 'vue';
import { postHeaders } from '../headers/post-headers';
import Modal from '@/components/Modal.vue';
import NewPostModal from '../modals/NewPostModal.vue';
import EditPostModal from '../modals/EditPostModal.vue';


const postStore = usePostStore()
const posts = computed(() => postStore.posts)
const search = ref('');
const showCreate = ref(false);
const showUpdate = ref(false);
const showDelete = ref(false);
const selectedPost = ref(null); 
const isActive = ref(false);

const handelCreate = () => {
    showCreate.value = true
    if (showCreate.value || showUpdate.value || showDelete.value) {
        isActive.value = true;
    }
}

const handleEdit = (post) => {
    selectedPost.value = post;
    showUpdate.value = true
    if (showCreate.value || showUpdate.value || showDelete.value) {
        isActive.value = true;
    }
}

const handleDelete = (post) => {
    selectedPost.value = post;
    showDelete.value = true
    if (showCreate.value || showUpdate.value || showDelete.value) {
        isActive.value = true;
    }
}

const closeModal = async () => {
    showCreate.value = false;
    showUpdate.value = false;
    showDelete.value = false;
    selectedPost.value = null;
    isActive.value = false
    await postStore.fetchAllPosts()
}

onMounted(async() =>{
    await postStore.fetchAllPosts()
})

</script>

<style>

</style>