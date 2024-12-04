import { createUser, deleteUser, getUsers } from "@/http/users";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore('userStore', () => {
    const users = ref([]);

    const fetchAllUsers = async () => {
        try {
            const { data } = await getUsers();
            users.value = data;
        } catch (error) {
            console.log(error);
        }
    }

    const handleCreateUser = async (request) => {
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
            await fetchAllUsers();
        } catch (error) {
            console.log(error);
        }
    }

    return {
        fetchAllUsers,
        handleCreateUser,
        handleShowUser,
        handleUpdate,
        handelDeleteUser,
        users,
    }
})