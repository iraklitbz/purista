<template>
    <footer class="bg-black flex flex-col justify-center">
       <div class="main-logo py-5">
            <nuxt-link to="/">
                <img class="w-24 md:w-36 mx-auto" src="~/assets/footer.png">
            </nuxt-link>
        </div>
         <ul class="flex justify-center">
            <li class="text-center mr-2">
                <a target="_blank" href="https://www.facebook.com/people/Purista-%E1%83%9E%E1%83%A3%E1%83%A0%E1%83%98%E1%83%A1%E1%83%A2%E1%83%90/100064998761253/">
                <nuxt-icon
                    name="facebook"
                    class="icon icon-fill text-3xl text-primary hover:text-white transition-colors ease-in duration-200 relative"
                />
            </a></li>
            <li class="text-center">
                <a target="_blank" href="https://www.instagram.com/puristabakery/">
                <nuxt-icon
                    name="instagram"
                    class="icon icon-fill text-3xl text-primary hover:text-white transition-colors ease-in duration-200"
                />
            </a></li>
        </ul>
        <div class="max-w-4xl m-auto w-full mt-10 flex justify-center border-solid border-t-2 py-2 border-primary">
            <p class="text-center text-sm text-white">{{ $t('footer.parraf') }}</p>
        </div>
    </footer>
</template>
<style>
    .text-instagram {
       color: #da2e69;
    }
    .text-facebook {
       color: #1A6ED8;
    }
</style>