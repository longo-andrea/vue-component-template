<script setup lang="ts">
interface ComponentAProps {
    message?: string
}

const props = defineProps<ComponentAProps>()
</script>

<template>
    <div class="compomnentA">
        <slot/>

        <p>{{ props.message }}</p>
    </div>
</template>

<style lang="scss">
.componentA {
    background: grey;
    color:black;
}
</style>