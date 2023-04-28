<script setup lang="ts">
import { computed } from 'vue'

interface ComponentBProps {
    message: string
}
const props = defineProps<ComponentBProps>()
const composedMessage = computed(() => `Your message is: ${props.message}`)
</script>

<template>
    <div>
        <p>{{ composedMessage }}</p>
    </div>
</template>