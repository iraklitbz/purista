<template>
    <section>
      <main>
        <div class="max-w-4xl mx-auto py-20 parrafBox px-5 md:px-0">
            <div class="parrafBox mb-10">
              <h2 class="text-2xl font-bold">{{ $t('store.title') }}</h2>
              <div class="mt-6 text-base text-contrast-medium">
                <p
                  v-for="index in 3"
                  class="mb-2"
                >
                    {{ $t(`store.box1.subtitle${index}`) }}
                </p>
              </div>
            </div>
          <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
            <Card 
              v-for="(item, index) in products" 
              :key="index"
              :product="item"
            />
          </div>
        </div>
      </main>
    </section>
  </template>
  
<script setup>
    const { locale } = useI18n()
    const { data } = await useAsyncGql({
      operation: 'products',
      variables: { locale: locale.value }
    })
    const products = ref(data.value.products.data)
</script>