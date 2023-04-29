<script setup lang="ts">
interface ComponentAProps {
    message?: string
}

const props = defineProps<ComponentAProps>()
</script>

<template>
    <div class="component-a">
        <div class="component-a__slot">
            <slot/>
        </div>

        <p class="component-a__message">{{ props.message }}</p>
    </div>
</template>

<style lang="scss">
.component-a {
    margin: 8px;
    padding: 8px;
    border: 1px solid #ededed;
    border-radius: 4px;
    background: hsl(0, 0%, 98%);

    &__slot {
        font-weight: bold;
    }

    &__message {
        opacity: .7;
    }
}
</style>