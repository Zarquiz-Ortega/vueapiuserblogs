<template>
    <v-container>
        <v-form
            @submit.prevent="handleSubmit(props.post.id,post)"
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
                <button class="text-white bg-blue-500 px-5 py-1 rounded-md" type="submit">Actulizar post</button>
            </div>
        </v-form>
        {{  post }}
    </v-container>
</template>

<script setup>
import { useBlogStore } from '@/stores/blog-store';
import { usePostStore } from '@/stores/post-store';
import { reactive, ref, defineEmits, onMounted, defineProps } from 'vue';

const emits = defineEmits(['close-modal']);
const formRef = ref(null);
const blogStore = useBlogStore()
const postStore = usePostStore()
const blogs = ref()

const props = defineProps({
    post:{
        required: true,
        type: Object
    }
})

const post = reactive({
    title: props.post.title,
    body: props.post.body,
    blog_id: props.post.blog_id
});


const handleSubmit = async (id,post) => {
    const isValid = await formRef.value.validate();
    if (isValid.valid) {
        post.blog_id = post.blog_id.id
        postStore.handleUpdatePost(id, post)
        console.log(post);
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