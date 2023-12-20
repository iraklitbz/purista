<template>
    <div 
        class="drawer"
        :class="toggleCart ? 'drawer--is-visible' : ''"
        >
        <div class="drawer__content relative z-50 bg-floor-dark inner-glow shadow-lg flex flex-col h-full">
            <div class="w-full">
              <div
                v-if="dataProducts.length"
              >
                <ul class="grid gap-5 grid-cols-3 max-w-4xl w-full mx-auto mt-10 max-h-[256px] overflow-y-auto">
                    <li
                      v-for="(product, index) in dataProducts"
                      :key="index"
                    >
                        <SmallCard
                            :product="product" 
                        />
                    </li>
                  </ul>
                <div
                class="max-w-4xl m-auto w-full text-right mt-5 text-white"
                >
                  <p class="text-sm lg:text-lg text-primary">
                      <span class="mr-2">Total:</span> 
                      <span>
                        {{ totalPrice }} ₾
                      </span>
                  </p>
                </div>
                <div
                    class="px-3 lg:px-5 py-2 mt-7 lg:py-3 border-t border-gray-800"
                  >
                    <div
                      class="max-w-4xl w-full mx-auto grid grid-cols-2"
                    >
                      <button 
                          @click="handleRemoveItemsCart" 
                          class="cursor-pointer text-error text-sm no-underline py-2 lg:text-base text-gray-600 block hover:text-primary transition-colors ease-in duration-200 text-center"
                      >
                  
                          Vaciar cesta
                      </button>
                      <nuxt-link
                          :to="localePath('/checkout', locale)"
                          class="btn btn--primary w-full text-white hover:text-primary transition-colors ease-in duration-200 py-2 border-l border-r border-gray-800 text-center"
                      >
                          Checkout &rarr;
                      </nuxt-link>
                    </div>
                </div>
              </div>
              <div 
                v-else
                class="h-full flex items-center justify-center py-10"
              >
                <p class="text-center text-white text-lg">
                    Tu cesta está vacía
                </p>
              </div>
            </div>
        </div>
          <div
            @click="handleCloseCart"   
            class="fixed w-full bg-black bg-opacity-20 top-0 left-0 z-1">
          </div>
        </div>
</template>
<script setup>
    import { cart } from '~/store/cart'
    const { locale } = useI18n()
    const localePath = useLocalePath()
    const toggleCart = ref(false)
    const dataProducts = ref([])
    dataProducts.value = cart().cartProducts
    const handleCloseCart = () => {
        let toggleCart = this.toggleCart
        toggleCart = !toggleCart
    }
    const totalPrice = computed(() => {
      return dataProducts.value.reduce((total, product) => {
          const productTotal = product.attributes.price * product.quantity;
          return total + productTotal;
      }, 0).toFixed(2); // Ajusta el número de decimales según tu lógica
  });
    const handleRemoveItemsCart = () => {
      cart().handleEmptyCart()
      dataProducts.value = []
    }
    const handleCheckout = () => {
        console.log('checkout', cart().cartProducts)
    }
</script>