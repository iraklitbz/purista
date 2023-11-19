<template>
    <div>
        <div 
            class="p-4 mb-4 text-sm rounded-lg text-center"
             :class="state === 'success' ? 'bg-green-100 text-green-800 dark:text-green-400' : 'bg-red-50 text-red-800'"
            >
            <span class="font-medium">
                Added <strong>{{ props.message }}</strong> to the cart
            </span>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    message: {
        type: String,
        default: 'Lorem'
    },
    state: {
        type: String,
        default: 'success'
    }
})
</script>