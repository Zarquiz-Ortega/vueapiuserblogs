<template>
    <v-container>
        <v-form
            @submit.prevent="handleSubmit(post)"
            ref="formRef"
            class="my-2"
        >

        <v-text-field
                v-model="post.title"
                label="Titulo"
                class="mb-3"
            ></v-text-field>

            <v-text-field
                v-model="post.body"
                label="Contenido"
                class="mb-3"
            ></v-text-field>

            <v-select
                :items="blogs"
                item-title="name" 
                label="Blog"
                item-value="id"
                v-model="post.blog_id"
            ></v-select>
            <div class="flex justify-center">
                <button class="add-button" type="submit">Agregar Post</button>
            </div>
        </v-form>
    </v-container>
</template>

<script setup>
import { useBlogStore } from '@/stores/blog-store';
import { usePostStore } from '@/stores/post-store';
import { reactive, ref, defineEmits, onMounted } from 'vue';

const emits = defineEmits(['close-modal']);
const formRef = ref(null);
const blogStore = useBlogStore()
const postStore = usePostStore()
const blogs = ref()

const post = reactive({
    title: '',
    body: '',
    blog_id: ''
});


const handleSubmit = async (post) => {
    const isValid = await formRef.value.validate();
    if (isValid.valid) {
        postStore.handleCreatPost(post)
        emits('close-modal');
    } else {
        alert('Formulario incompleto');
    }
};

onMounted(async() => {
    await blogStore.fetchAllBlogs()
    blogs.value = blogStore.blogs
})

</script>

<style>
    
</style>