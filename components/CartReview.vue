<template>
    <section>
        <ClientOnly>
            <ul
                v-if="dataProducts && dataProducts.length"
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
            <span
                v-if="priceDiscount"
                class="text-md text-right block text-green-900"
            >
                You have a <b>discount</b> of {{ priceDiscount }}%
            </span>
            <p class="lg:text-xl text-primary-darker text-right text-lg bg-primary-lighter p-2 rounded-lg">
                <span class="mr-2">Total:</span> 
                <span
                    v-if="priceDiscount"
                    class="line-through mr-2 text-[15px]"
                >
                    {{ totalPrice }} ₾
                </span>
                <span>
                    {{ handlePriceDiscount(totalPrice) }} ₾
                </span>
            </p>
        </ClientOnly>
    </section>
</template>

<script setup>
    import { cart } from '~/store/cart'
    const props = defineProps({
        priceDiscount: {
            type: Number,
            default: 0
        }
    })
    const handlePriceDiscount = (price) => {
        return (price - (price * props.priceDiscount / 100)).toFixed(2)
    }
    const dataProducts = ref([])
    dataProducts.value = cart().cartProducts
    const totalPrice = computed(() => {
        return dataProducts.value.reduce((total, product) => {
            const productTotal = product.attributes.price * product.quantity;
            return total + productTotal;
        }, 0).toFixed(2);
    });
</script>