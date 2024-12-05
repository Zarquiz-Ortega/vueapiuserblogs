<template>
    <v-container>
        <p class="text-center">
            Desea eliminar al usuario {{ props.user.name }}
        </p>
        <div class="flex justify-center m-3">
            <v-btn color="error" variant="tonal" @click="handleDelete(props.user.id)">Confirmar</v-btn>
        </div>
    </v-container>
</template>

<script setup>
import { defineEmits, defineProps, ref } from 'vue';
import { useUserStore } from '@/stores/user-store';

const emits = defineEmits(['close-modal']);
const userStore = useUserStore();
const { handelDeleteUser } = userStore

const props = defineProps({
    user: {
        required: true,
        type: Object
    }
})

const handleDelete = async (id) => {
    await handelDeleteUser(id),
    emits('close-modal');
}

</script>

<style scoped>
    
</style>