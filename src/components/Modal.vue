<template>
    <v-dialog :model-value="modelValue" @update:model-value="updateValue" width="auto">
        <v-card min-width="400">
            <v-card-title>{{ title }}</v-card-title>
            <v-card-text>
                <!-- Renderiza el contenido dinámico del slot -->
                <slot @close-modal="closeModal"></slot>
            </v-card-text>
            <v-card-actions>
                <v-btn color="error" @click="closeModal">Cerrar</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script setup>
import { defineProps, defineEmits, ref } from 'vue';

const props = defineProps({
    modelValue: { type: Boolean, required: true },
    title: { type: String, required: true },
});

const emits = defineEmits(['update:modelValue', 'close-modal']);

const updateValue = (value) => {
    emits('update:modelValue', value);
};

const closeModal = () => {
    emits('update:modelValue', false);
    emits('close-modal');
};
</script>
