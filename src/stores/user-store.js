import { createUser, deleteUser, getUsers, getUserWitoutBlog, updateUser } from "@/http/users";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore('userStore', () => {
    const users = ref([]);
    const isLoading = ref(false);
    const userWitoutBlogs = ref ([])

    const fetchAllUsers = async () => {
        isLoading.value = true;
        try {
            const { data } = await getUsers();
            users.value = data;
        } catch (error) {
            console.log(error);
        }finally{
            isLoading.value = false;
        }
    }

    const handleCreatUser = async (request) => {
        try {
            const {data} = await createUser(request)
            users.value.push(data);
        } catch (error) {
            console.log(error);
        }
    }

    const handleShowUser = async (id) => {
        try {
            const {data} = await showUser(id);
            users.value = data
        } catch (error) {
            console.log(error);
        }
    }

    const handleUpdate = async (id, data) => {
        try {
            await updateUser(id, data);
            await fetchAllUsers();
        } catch (error) {
            console.log(error);
        }
    }

    const handelDeleteUser = async (id) => {
        try {
            await deleteUser(id);
        } catch (error) {
            console.log(error);
        }
    }

    const fetchUserWitouBlog = async () => {
        try {
            const { data } = await getUserWitoutBlog()
            userWitoutBlogs.value = data
        } catch (error) {
            console.log(error);
        }
    }

    return {
        fetchAllUsers,
        handleCreatUser,
        handleShowUser,
        handleUpdate,
        handelDeleteUser,
        fetchUserWitouBlog,
        users,
        userWitoutBlogs,
        isLoading,
    }
})