<template>
    <v-container>
        <v-form ref="formRef" @submit.prevent="handleSubmit(props.user.id)" class="m-2">
            <v-text-field
                v-model="user.name"
                label="Nombre"
                :rules="nameRules"
                class="mb-3"
            ></v-text-field>

            <v-text-field
                v-model="user.email"
                label="Correo"
                :rules="emailRules"
                class="mb-3"
            ></v-text-field>

            <div class="flex justify-center">
                <button class="text-white py-1 px-10 rounded-md text-base  bg-blue-500 hover:bg-blue-700 duration-500" type="submit">Actualizar </button>
            </div>
        </v-form>
    </v-container>
</template>

<script setup>
import { emailRules, nameRules } from '@/rules/all-rules';
import { useUserStore } from '@/stores/user-store';
import { defineEmits, defineProps, reactive, ref } from 'vue';

const emits = defineEmits(['close-modal'])
const formRef = ref();
const userStore = useUserStore();
const { handleUpdate } = userStore

const props = defineProps({
    user:{
        required: true,
        type: Object
    }
})

const user = reactive({
    name: props.user.name,
    email: props.user.email,
})

const handleSubmit = async (id) =>{
    const isValid = await formRef.value.validate()
    if (isValid.valid) {
        await handleUpdate(id, user)
        emits('close-modal')
    } else {
        alert('Formulario incompleto');
    }
}
</script>

<style scoped>
    
</style>