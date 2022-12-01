<template>
    <footer class="bg-black flex flex-col justify-center">
       <div class="main-logo py-5">
            <nuxt-link to="/">
                <img class="w-24 md:w-36 mx-auto" :src="require(`~/assets/footer.png`)">
            </nuxt-link>
        </div>
        <div class="max-w-4xl m-auto w-full mt-10 flex justify-center border-solid border-t-2 py-2 border-primary">
            <p class="text-center text-sm text-white">{{ $t('footer.parraf') }}</p>
        </div>
    </footer>
</template>