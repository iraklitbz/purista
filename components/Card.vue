<template>
    <div 
        class="prod-card-v2 group mb-7"
        >

        <nuxt-link 
            :to="localePath(`/products/${product.attributes.slug}`, locale)" 
            class="prod-card-v2__img-link rounded-lg shadow-md "
        >
        <figure
            class="rounded-xl shadow-md overflow-hidden relative"
        >
            <img 
                class="w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-105" 
                :src="product.attributes.feature.data.attributes.url"
            >
            <div
                class="absolute bottom-0 p-2 bg-black bg-opacity-70 w-full text-center"
            >
                <h2 class="text-lg text-white">
                    {{product.attributes.title}}
                </h2>
            </div>
        </figure>
        </nuxt-link>

        <div class="p-1 lg:p-1 text-center">

            <div class="py-2">
                <span class="prod-card-v2__price text-xl text-primary-darker">
                {{product.attributes.price}} ₾
                </span>
            </div>

            <footer>
            <div
                v-if="user"
                class="relative"
            >
                <div class="number-input absolute left-0 top-0 z-30 w-[60px]">
                    <input 
                        v-model="productQty"
                        class="form-control w-full text-white appearance-none bg-primary-dark border border-none px-3 rounded-md text-md h-[40px] leading-2 transition duration-200 outline-none placeholder:opacity-100 placeholder:text-gray-400 " 
                        type="number" 
                        name="qtyInput" 
                        :id="'qtyInput_' + product.id"
                        min="1" 
                        max="50" 
                        step="1" 
                    >
                </div>
                <button 
                    class="button w-full button--aylen px-2 h-[40px] bg-primary hover:bg-primary-light hover:text-white relative block focus:outline-none text-white rounded-lg text-sm text-center font-semibold uppercase tracking-widest overflow-hidden" 
                    @click="handleBeforeToCart(product)"
                >
                    Add
                </button>
            </div>
            </footer>

        </div>
    </div>
</template>
<script setup>
import { useCartStore } from '~/store/cart'
import { useAlertStore } from '~/store/alert'
const user = useStrapiUser()
const props = defineProps({
    product: {
        type: Object,
        required: true
    }
})
const { locale } = useI18n()
const cartStore = useCartStore()
const alertStore = useAlertStore()
const { handleAlertMenu } = alertStore
const { addToCart} = cartStore
const productQty = ref(1)
const handleBeforeToCart = (product) => {
    const qty = productQty.value
    product.quantity = qty
    addToCart({ ...product, quantity: qty })
    handleAlertMenu(product.attributes.title)
}
const localePath = useLocalePath()
</script>