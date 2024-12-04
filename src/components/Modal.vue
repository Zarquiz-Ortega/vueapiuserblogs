<template>
    <div class="text-center pa-4">
        <v-dialog v-model="props.show" width="auto">
            <v-card max-width="400" prepend-icon="mdi-update"
                text="Your application will relaunch automatically after the update is complete."
                title="Update in progress">
                <slot></slot>
                <v-btn @click="handleSubmit">cerrar</v-btn>
            </v-card>
        </v-dialog>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
import { defineEmits } from 'vue';

const props = defineProps({
    show: {
        required:true,
        type: Boolean,
    }
})

const handleSubmit  = () => {
    emits('close-modal');
}

const emits = defineEmits('close-modal')

</script>

<style scoped></style>  