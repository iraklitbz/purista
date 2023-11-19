<template>
    <section>
        <ul
            v-if="dataProducts.length"
        >
            <li
                v-for="(product, index) in dataProducts"
                :key="index"
                class="mb-5"
            >
                <SmallCard
                    :product="product" 
                    :alternative="true"
                />
            </li>
        </ul>
        <div
            v-else
            class="h-full flex items-center justify-center py-10"
        >
            <p class="text-center text-black text-lg">
                Tu cesta está vacía
            </p>
        </div>
        <p class="lg:text-xl text-primary-darker text-right text-lg bg-primary-lighter p-2 rounded-lg">
            <span class="mr-2">Total:</span> 
            <span>
            {{ totalPrice }} ₾
            </span>
        </p>
    </section>
</template>

<script setup>
    import { useCartStore } from '~/store/cart'
    const cartStore = useCartStore()
    const { handleEmptyCart, cartProducts } = cartStore
    const dataProducts = ref([])
    dataProducts.value = cartProducts
    const totalPrice = computed(() => {
        return dataProducts.value.reduce((total, product) => {
            return total + product.attributes.price * product.quantity;
        }, 0);
    })
    const handleRemoveItemsCart = () => {
      handleEmptyCart()
      dataProducts.value = []
    }
    const handleCheckout = () => {
        console.log('checkout', cartProducts)
    }
</script>