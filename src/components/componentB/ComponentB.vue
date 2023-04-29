<script setup lang="ts">
import { computed } from 'vue'

interface ComponentBProps {
    message: string
}
const props = defineProps<ComponentBProps>()
const composedMessage = computed(() => `Your message is: ${props.message}`)
</script>

<template>
    <div class="component-b">
        <p class="component-b__style">{{ composedMessage }}</p>
    </div>
</template>

<style lang="scss">
.component-b {
    margin: 8px;
    text-decoration: underline;
}
</style>