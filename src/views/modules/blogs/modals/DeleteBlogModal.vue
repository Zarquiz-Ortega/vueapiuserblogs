<template>
    <v-container>
        <p class="text-center">
            Desea eliminar al usuario {{ props.blog.name }}
        </p>
        <div class="flex justify-center m-3">
            <v-btn color="error" variant="tonal" @click="handleDelete(props.blog.id)">Confirmar</v-btn>
        </div>
    </v-container>
</template>
<script setup>
import { useBlogStore } from '@/stores/blog-store';
import { defineEmits, defineProps } from 'vue';

const emits = defineEmits(['close-modal']);
const props = defineProps({
    blog: {
        required: true,
        type: Object,
    }
})

const blogStore = useBlogStore();
const { handelDeleteBlog } = blogStore;

const handleDelete = async (id) =>{
    try {
        await handelDeleteBlog(id)
        emits('close-modal')

    } catch (error) {
        alert(error);

    }
}

</script>
<style scoped>
    
</style>