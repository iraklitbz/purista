<template>
    <div class="general">
        <Header />
        <main>
            <div class="max-w-4xl mx-auto py-20 parrafBox px-5 md:px-0">
                <div class="grid grid-cols-12 gap-5 lg:gap-8">
                    <div class="col-span-12">
                        <div class="text-component">
                            <h1>{{product.title}}</h1>
                            <p class="text-lg mt-5 lg:text-2xl text-primary font-bold">{{product.price}}</p>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-6 xl:col-span-5">
                        <div class="w-full">
                            <table class="prop-table w-full text-base">
                                <tbody class="prop-table__body">
                                    <tr 
                                        v-for="(item, index) in product.lists" 
                                        :key="index"
                                        class="prop-table__row"
                                    >
                                        <th class="prop-table__cell prop-table__cell--th">{{item.q}}</th>
                                        <td class="prop-table__cell text-right">{{item.a}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-6 xl:col-span-7">
                        <figure>
                            <img class="block w-full" :src="require(`~/assets/images/products/${product.img}`)"  />
                        </figure>
                    </div>
                </div>
            </div>
            <div class="max-w-4xl mx-auto parrafBox px-5 md:px-0">
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4" v-if="$t('productos')">
                    <div 
                    v-for="(item, index) in products.slice(0,4)" 
                    :key="index"
                    class="prod-card-v2 mb-10"
                    >
                    <!-- <span class="prod-card-v2__badge" role="text">New <i class="sr-only">product</i></span> -->

                    <nuxt-link :to="`/products/${item.id}`" class="prod-card-v2__img-link rounded-lg shadow-md">
                        <figure>
                        <img class="w-full" :src="require(`~/assets/images/products/${item.img}`)">
                        </figure>
                    </nuxt-link>

                    <div class="p-1 lg:p-1 text-center">
                        <h1 class="text-lg lg:text-2xl"><nuxt-link :to="`/products/${item.id}`" class="product-card-v2__title text-lg">{{item.title}}</nuxt-link></h1>

                        <div class="my-1 lg:my-1.5">
                        <span class="prod-card-v2__price text-primary font-bold">{{item.price}}</span>
                        </div>

                    </div>
                    </div>
                </div>
            </div>
        </main>
      <Footer />
    </div>
  </template>
  
<script>
export default {
    name: 'DetailPage',
    data() {
        return {
            products: [],
            product: {
                title: '',
                price: '',
                img: '1.jpeg',
                description: '',
                id: '',
                lists: {
                    1: {
                        q: 'Peso',
                        a: '4.54 g'
                    }
                }
            }
        }
    },
    mounted() {
        const obj = this.$t('productos')
        const result = Object.keys(obj).map((key) => obj[key]);
        const shuffledArray = result.sort((a, b) => 0.5 - Math.random());
        this.products = shuffledArray

        const elemento = "item" + this.$route.params.id
        if(this.$t('productos')) {
            this.product = this.$t('productos')[elemento]
        }
    }
}
</script>
<style lang="scss">
@import "~/assets/scss/card.scss";
.parrafBox p {
    @apply mb-4;
}
.prop-table__cell {
  @apply py-3 lg:py-3 pr-3 lg:pr-5 pl-0;
  @apply border-b border-contrast-lower;
}
.prop-table__row:nth-child(odd) {
    @apply bg-contrast-medium bg-opacity-9;
}

.prop-table__cell--th {
  font-weight: bold;
  text-align: left;
}

.prop-table--v2 {
  @apply bg-primary/15;
  @apply border-l-4 border-primary;
}
.prop-table--v2 .prop-table__cell {
  @apply p-3 lg:p-5;
  border-width: 0;
}
</style>
  