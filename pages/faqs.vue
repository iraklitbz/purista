<template>
    <section>
      <main>
        <div class="max-w-3xl mx-auto py-10 px-5 md:px-0">
            <section>
                <div class="w-[calc(100%_-_2.5rem)] lg:w-[calc(100%_-_4rem)] mx-auto max-w-3xl">

                    <ul class="my-10">

                        <li     
                            v-for="(item, index) in faqs" 
                            :key="index" 
                            class="border-b border-solid border-gray-200 hover:border-b-gray-400 transition-all ease-in-out duration-300"
                            :class="index === 1 ? 'border-t border-solid border-gray-200 ' : ''"
                        >
                            <button 
                                class="py-3 lg:py-5 w-full flex justify-between items-center" type="button"
                                @click="handleAccordion(index)"
                            >
                                <span class="text-lg lg:text-xl text-left">
                                    {{
                                        item.attributes.question
                                    }}
                                </span>
                                <nuxt-icon
                                    name="plus"
                                    class="icon icon-stroke text-2xl text-primary relative transition-all ease-in-out duration-300"
                                    :class="activeAccordion === index ? 'rotate-45' : ''"
                                />
                            </button>
                            <div 
                                v-if="activeAccordion === index"
                                class="pt-1.5 lg:pt-2 px-5 lg:px-8 pb-5 lg:pb-8"
                            >
                                <div class="text-component leading-snug text-space-y-md">
                                    <p class="text-gray-600 text-lg">
                                        {{
                                             item.attributes.answer
                                        }}
                                    </p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                </section>
        </div>
      </main>
    </section>
  </template>
  
<script setup>
const activeAccordion = ref(null)
const { locale } = useI18n()
  const query = gql`
      query GetFaqsEdges($locale: I18NLocaleCode!) {
        faqs(locale: $locale) {
          data {
            attributes {
                question
                answer
            }
          }
        }
      }
  `
    const { data, refresh } = await useAsyncQuery(query, { locale: locale.value } )
    const faqs = ref(data.value.faqs.data)
    const handleAccordion = (index) => {
        activeAccordion.value = activeAccordion.value === index ? null : index
    }
    onMounted(() => {
        refresh()
    })
</script>

  