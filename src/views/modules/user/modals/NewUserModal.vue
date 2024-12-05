<template>
    <v-container>
        <v-form ref="formRef" @submit.prevent="handleSubmit" class="m-2">
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
                <button class="add-button" type="submit">Agregar Usuario</button>
            </div>
        </v-form>
    </v-container>
</template>

<script setup>
import { emailRules, nameRules } from '@/rules/all-rules';
import { reactive, ref, defineEmits } from 'vue';
import { useUserStore } from '@/stores/user-store';

const emits = defineEmits(['close-modal']);

const user = reactive({
    name: '',
    email: ''
});

const formRef = ref(null);
const userStore = useUserStore();
const { handleCreatUser } = userStore;

const handleSubmit = async () => {
    const isValid = await formRef.value.validate();
    if (isValid.valid) {
        await handleCreatUser(user);
        emits('close-modal');
    } else {
        alert('Formulario incompleto');
    }
};
</script>
