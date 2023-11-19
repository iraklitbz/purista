<template>
    <div 
        class="prod-card-v2 group"
        >

        <nuxt-link 
        :to="localePath(`/products/${product.attributes.slug}`, locale)" 
        class="prod-card-v2__img-link rounded-lg shadow-md "
        >
        <figure
            class="rounded-xl shadow-md overflow-hidden"
        >
            <img 
                class="w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-105" 
                :src="product.attributes.feature.data.attributes.url"
            >
        </figure>
        </nuxt-link>

        <div class="p-1 lg:p-1 text-center">
        <h2 class="text-lg lg:text-xl mt-2">
            <nuxt-link 
            :to="localePath(`/products/${product.attributes.slug}`, locale)" 
            class="product-card-v2__title text-lg font-bold hover:text-primary transition-colors ease-in duration-200"
            >
            {{product.attributes.title}}
            </nuxt-link>
        </h2>

        <div class="my-1 lg:my-1.5">
            <span class="prod-card-v2__price text-xl text-primary font-bold">
            {{product.attributes.price}} ₾
            </span>
        </div>

        <footer
            class="mt-7"
        >
        <div
            v-if="user"
            class="relative"
        >
            <div class="number-input absolute left-0 top-0 z-30">
                <input 
                    v-model="productQty"
                    class="form-control text-white appearance-none bg-primary-dark border border-none px-3 rounded-md text-md h-[40px] leading-2 transition duration-200 outline-none placeholder:opacity-100 placeholder:text-gray-400 " 
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