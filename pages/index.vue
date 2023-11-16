<template>
  <section>
    <div class="main-bg"></div>
    <main>
      <div class="max-w-4xl mx-auto pt-20 parrafBox px-5 md:px-0">
          <h2 class="text-3xl font-bold">
            {{ $t('home.title') }}
          </h2>
          <div class="mt-6 text-lg text-contrast-medium">
            <p
              v-for="index in 4"
              class="mb-2"
            >
                {{ $t(`home.box1.subtitle${index}`) }}
            </p>
          </div>
      </div>
      <div class="bg-contrast-high bg-opacity-5 py-20 px-5 md:px-0">
        <div class="max-w-6xl mx-auto">
          <div class="aspect-w-16 aspect-h-9">
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/WMfFilAJ5aU"
                    title="Video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            </div>
        </div>
      </div>
      <div class="max-w-4xl mx-auto pb-10 parrafBox px-5 md:px-0">
          <p class="text-xl font-bold mb-5">{{ $t('home.title2') }}</p>
          <p class="text-lg text-contrast-medium mb-5">{{ $t('home.subtitle2') }}</p>
          <p class="text-xl font-bold mb-5">{{ $t('home.title3') }}</p>
          <p class="text-lg text-contrast-medium mb-5">{{ $t('home.subtitle3') }}</p>
          <p class="text-xl font-bold">{{ $t('home.title4') }}</p>
      </div>
     <ProductsComponent />
    </main>
  </section>
</template>
<style lang="scss">
.main-bg {
  height: 28vh;
  width: 100%;
  background-image: url('https://res.cloudinary.com/dhaznxmws/image/upload/v1700167300/assets/1_w3midg.jpg');
  background-position: top center;
  background-size: 200%;
  background-attachment: fixed;
  background-repeat: no-repeat;
  @media (min-width: 48rem) {
    background-position: center center;
    background-attachment: fixed;
    background-size: cover;
    height: 60vh;
  }
}
</style>
