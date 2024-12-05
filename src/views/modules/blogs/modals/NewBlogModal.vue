<template>
    <v-container>
        <v-form
            @submit.prevent="handleSubmit"
            ref="formRef"
            class="mb-2"
        >
            <v-text-field
                v-model="blog.name"
                label="Nombre"
                :rules="nameRules"
                class="mb-3"
            >
            </v-text-field>

            <v-text-field
                v-model="blog.url"
                label="Url"
                :rules="urlRules"
                class="mb-3"
            >
            </v-text-field>
            <v-select 
                :items="users"
                item-title="name" 
                label="Blog"
                item-value="id"
                v-model="blog.blog_id"
            >
            </v-select>
            <div class="flex justify-center">
                <button class="add-button" type="submit">Agregar Blog</button>
            </div>
        </v-form>
    </v-container>
</template>
<script setup>
import { nameRules, urlRules } from '@/rules/all-rules';
import { useBlogStore } from '@/stores/blog-store';
import { useUserStore } from '@/stores/user-store';
import { reactive, ref, defineEmits, onMounted } from 'vue';

const emits = defineEmits(['close-modal']);
const formRef = ref(null);

const blog = reactive({
    name: '',
    url: '',
    user_id: ''
})

const users = ref();

const userStore = useUserStore();
const blogStore = useBlogStore();
const { handleCreatBlog } = blogStore

const handleSubmit = async () =>{
    const isValid = await formRef.value.validate()
    if (isValid.valid) {
        await handleCreatBlog(blog)
        emits('close-modal');
    } else {
        alert('Formulario incompleto');
    }
}

onMounted(async () =>{
    await userStore.fetchUserWitouBlog()
    users.value = userStore.userWitoutBlogs
})


</script>
<style scoped>
    
</style>