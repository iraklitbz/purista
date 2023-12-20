<template>
    <section>
        <main>
            <div class="max-w-4xl mx-auto py-20 parrafBox px-5 md:px-0">
                <div class="grid grid-cols-12 gap-5 lg:gap-8">
                    <div class="col-span-12">
                        <div class="text-component">
                            <h2
                              class="text-4xl font-bold"
                            >
                              {{product.attributes.title}}
                            </h2>
                            <p class="text-lg mt-5 lg:text-2xl text-primary font-bold">
                              {{product.attributes.price}} ₾
                            </p>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-6 xl:col-span-5">
                        <div class="w-full list md:sticky md:top-20">
                            <ul
                              v-html="markdown.render(product.attributes.description)"
                            >
                          </ul>
                          <div
                              v-if="user"
                              class="relative mt-10"
                          >
                              <div class="number-input absolute left-0 top-0 w-[60px] z-30">
                                  <input 
                                      v-model="productQty"
                                      class="form-control text-white appearance-none w-full bg-primary-dark border border-none px-3 rounded-md text-md h-[40px] leading-2 transition duration-200 outline-none placeholder:opacity-100 placeholder:text-gray-400 " 
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
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-6 xl:col-span-7">
                        <figure>
                            <img class="block w-full" :src="product.attributes.feature.data.attributes.url"  />
                        </figure>
                    </div>
                </div>
            </div>
            <ProductsComponent />
        </main>
    </section>
  </template>
  
<script setup>
import MarkdownIt from "markdown-it"
import { cart } from '~/store/cart'
import { useAlertStore } from '~/store/alert'
const user = useStrapiUser()
const markdown = new MarkdownIt();
const route = useRoute()
const alertStore = useAlertStore()
const { handleAlertMenu } = alertStore
const { locale } = useI18n()
const { data } = await useAsyncGql({
  operation: 'product',
  variables: { slug: route.params.slug, locale: locale.value }
})
const product = ref(data.value.products.data[0])

const productQty = ref(1)

const handleBeforeToCart = (product) => {
    const qty = productQty.value
    product.quantity = qty
    cart().addToCart({ ...product, quantity: qty })
    handleAlertMenu(product.title)
}
</script>
<style scope>
  .list li {
    @apply mb-2 p-2 bg-gray-50
  }
</style>
  