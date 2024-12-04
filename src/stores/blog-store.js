import { getBlogs } from "@/http/blogs";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useBlogStore = defineStore('blogStore', () =>{
    const blogs = ref([]); 

    const loadAllBlogs = async () => {
        try {
            const {data} = await getBlogs();
            userHeaders.value
        } catch (error) {
            console.log(error);
        }
    }

    const addNewBlog = async (data) => {
        try {
            
        } catch (error) {
            console.log(error);
        }
    }

    const fetchBlogById = async (id) => {
        try {
            
        } catch (error) {
            console.log(error);
        }
    }

    const modifyBlog = async (id, data) => {
        try {
            
        } catch (error) {
            console.log(error);
        }
    }

    const removeBlog = async (id) => {
        try {
            
        } catch (error) {
            console.log(error);
        }
    }


    return{
        loadAllBlogs,
        addNewBlog,
        fetchBlogById,
        modifyBlog,
        removeBlog,
        blogs
    };
})