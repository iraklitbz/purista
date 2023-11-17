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
                              {{product.title}}
                            </h2>
                            <p class="text-lg mt-5 lg:text-2xl text-primary font-bold">
                              {{product.price}} ₾
                            </p>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-6 xl:col-span-5">
                        <div class="w-full list md:sticky md:top-10">
                            <ul
                              v-html="markdown.render(product.description)"
                            >
                          </ul>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-6 xl:col-span-7">
                        <figure>
                            <img class="block w-full" :src="product.feature.data.attributes.url"  />
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
const markdown = new MarkdownIt();
const route = useRoute()
const { locale } = useI18n()
const { data } = await useAsyncGql({
  operation: 'product',
  variables: { slug: route.params.slug, locale: locale.value }
})
const product = ref(data.value.products.data[0].attributes)
</script>
<style scope>
  .list li {
    @apply mb-2 p-2 bg-gray-50
  }
</style>
  