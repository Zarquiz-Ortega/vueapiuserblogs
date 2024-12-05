import { createBlog, deleteBlog, getBlogs, showBlog, updateBlog } from "@/http/blogs";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useBlogStore = defineStore('blogStore', () =>{
    const blogs = ref([]); 

    const fetchAllBlogs = async () => {
        try {
            const {data} = await getBlogs();
            blogs.value = data
        } catch (error) {
            console.log(error);
        }
    }

    const handleCreatBlog = async (request) => {
        try {
            const {data} = await createBlog(request)
            blogs.value.push(data);
        } catch (error) {
            console.log(error);
        }
    }

    const handleShowBlog = async (id) => {
        try {
            const {data} = await showBlog(id);
            blogs.value = data
        } catch (error) {
            console.log(error);
        }
    }

    const handleUpdateBlog = async (id, request) => {
        try {
            await updateBlog(id, request);
            await fetchAllBlogs();
        } catch (error) {
            console.log(error);
        }
    }

    const handelDeleteBlog = async (id) => {
        try {
            await deleteBlog(id);
        } catch (error) {
            console.log(error);
        }
    }


    return{
        fetchAllBlogs,
        handleCreatBlog,
        handleShowBlog,
        handleUpdateBlog,
        handelDeleteBlog,
        blogs
    };
})