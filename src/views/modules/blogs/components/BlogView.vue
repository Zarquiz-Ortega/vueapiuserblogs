<template>
    <v-container>
        <div class="flex m-5">
            <h1 class="flex-1 text-3xl">Blogs</h1>
            <v-btn class="flex-none" variant="outlined" @click="handelCreate">
                Agregar Blog
            </v-btn>
        </div>
        <v-card flat>
            <template v-slot:text>
                <v-text-field v-model="search" label="Search" prepend-inner-icon="mdi-magnify" variant="outlined"
                    hide-details single-line></v-text-field>
            </template>

            <v-data-table :headers="blogHeaders" :items="blogs" :search="search">
                <template  #item.actions="{ item }">
                    <v-btn class="m-3" density="comfortable" color="primary" size="small" variant="outlined" @click="handleEdit(item)">Edit</v-btn>
                    <v-btn color="error" density="comfortable" size="small" variant="outlined" @click="handleDelete(item)" >Delete</v-btn>
                </template>
            </v-data-table>
        </v-card>

        <Modal
            v-model="isActive"
            title="Gestion de Blogs"
            @close-modal="closeModal"
        >
            <NewBlogModal
                v-if="showCreate" 
                @close-modal="closeModal"
            ></NewBlogModal>

            <EditBlogModal
                v-if="showUpdate"
                :blog="selectedBlog"
                @close-modal="closeModal"
            ></EditBlogModal>

            <DeleteBlogModal
                v-if="showDelete" 
                :blog="selectedBlog"
                @close-modal="closeModal"
            ></DeleteBlogModal>
        </Modal>

    </v-container>
</template>

<script setup>
import { useBlogStore } from '@/stores/blog-store';
import { blogHeaders } from '../headers/blog-headers';
import { computed, onMounted, ref } from 'vue';
import Modal from '@/components/Modal.vue';
import NewBlogModal from '../modals/NewBlogModal.vue';
import EditBlogModal from '../modals/EditBlogModal.vue';
import DeleteBlogModal from '../modals/DeleteBlogModal.vue';

const blogStore = useBlogStore();
const blogs = computed(() => blogStore.blogs)

// ])
const { fetchAllBlogs } = blogStore
const search = ref('');
const showCreate = ref(false);
const showUpdate = ref(false);
const showDelete = ref(false);
const selectedBlog = ref(null); 
const isActive = ref(false);

const handelCreate = () =>{
    showCreate.value = true
    if (showCreate.value || showUpdate.value || showDelete.value) {
        isActive.value = true;
    }
}

const handleEdit = (blog) =>{
    selectedBlog.value = blog;
    showUpdate.value = true
    if (showCreate.value || showUpdate.value || showDelete.value) {
        isActive.value = true;
    }
}

const handleDelete = (blog) => {
    selectedBlog.value = blog;
    showDelete.value = true
    if (showCreate.value || showUpdate.value || showDelete.value) {
        isActive.value = true;
    }
}

const closeModal = async () => {
    showCreate.value = false;
    showUpdate.value = false;
    showDelete.value = false;
    selectedBlog.value = null;
    isActive.value = false
    await fetchAllBlogs()
}

onMounted(async () => {
    await fetchAllBlogs()
})

</script>

<style></style>