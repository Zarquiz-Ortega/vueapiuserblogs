import { createPost, deletePost, getPosts, showPost, updatePost } from "@/http/post";
import { defineStore } from "pinia";
import { ref } from "vue";

export const usePostStore = defineStore('postStore', () => {
    const posts = ref([])

    const fetchAllPosts = async () => {
        try {
            const {data} = await getPosts();
            posts.value = data
        } catch (error) {
            console.log(error);
        }
    }

    const handleCreatPost = async (request) => {
        try {
            const {data} = await createPost(request)
            posts.value.push(data);
        } catch (error) {
            console.log(error);
        }
    }

    const handleShowPost = async (id) => {
        try {
            const {data} = await showPost(id);
            posts.value = data
        } catch (error) {
            console.log(error);
        }
    }

    const handleUpdatePost = async (id, request) => {
        try {
            await updatePost(id, request);
            await fetchAllPosts();
        } catch (error) {
            console.log(error);
        }
    }

    const handelDeletePost = async (id) => {
        try {
            await deletePost(id);
        } catch (error) {
            console.log(error);
        }
    }

    return {
        fetchAllPosts,
        handleCreatPost,
        handleShowPost,
        handleUpdatePost,
        handelDeletePost,
        posts
    }
})