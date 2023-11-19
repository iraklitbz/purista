<template>
    <div
        class="group"
    >
        <div
            class="flex"
        >
                <figure
                    class="rounded-xl shadow-md overflow-hidden w-16 h-16 mr-3"
                >
                    <img 
                        class="w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-105" 
                        :src="props.product.attributes.feature.data.attributes.formats.small.url"
                    />
                </figure>
                <div
                    class="flex flex-col justify-between"
                >
                    <h3
                        class="text-white"
                    >
                        <nuxt-link
                            :to="localePath(`/products/${props.product.attributes.slug}`, locale)"
                            class=" hover:text-primary transition-colors ease-in duration-200"
                            :class="{
                                'text-white': !props.alternative,
                                'text-black': props.alternative
                            }"
                        >
                            {{   handleTrucate(props.product.attributes.title) }}
                        </nuxt-link>
                    </h3>
                    <div
                        class="mt-3 flex"
                    >
                        <div class="number-input mr-2 w-[60px]">
                            <input 
                                v-model="props.product.quantity"
                                class="form-control  appearance-none w-full border border-none px-3 rounded-md text-md leading-2 transition duration-200 outline-none placeholder:opacity-100 placeholder:text-gray-400 " 
                                :class="{
                                    'bg-primary-dark': !props.alternative,
                                    'bg-primary-lighter text-primary-darker': props.alternative
                                }"
                                type="number" 
                                name="qtyInput" 
                                :id="'qtyInput_' + props.product.id"
                                min="1" 
                                max="50" 
                                step="1" 
                            >
                        </div>
                        <p
                            class="mr-2"
                            :class="{
                                'text-primary-light': !props.alternative,
                                'text-primary-darker': props.alternative
                            }"
                        >
                            {{
                                props.product.attributes.price * props.product.quantity
                            }} ₾
                        </p>
                        <button 
                            class="ml-2 text-xs text-red-400 hover:text-red-500 transition-colors ease-in duration-200"
                            @click="removeFromCart(props.product)"
                        >
                            Remove
                        </button>
                    </div>
                </div>
        </div>
    </div>
</template>

<script setup>
import { useCartStore } from '~/store/cart'
const props = defineProps({
    product: {
        type: Object,
        default: () => ({})
    },
    alternative: {
        type: Boolean,
        default: false
    }
})
const cartStore = useCartStore()
const { removeFromCart } = cartStore
const { locale } = useI18n()
const localePath = useLocalePath()
const handleTrucate = (text) => {
    return text.length > 20 ? text.substring(0, 20) + '...' : text
}
</script>