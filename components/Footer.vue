<template>
    <footer class="bg-black flex flex-col justify-center">
       <div class="main-logo py-5">
            <nuxt-link to="/">
                <img class="w-24 md:w-36 mx-auto" :src="require(`~/assets/footer.png`)">
            </nuxt-link>
        </div>
         <ul class="flex justify-center">
            <li class="text-center text-white text-sm mr-2"><a cl target="_blank" href="https://www.facebook.com/profile.php?id=100064998761253"><load-svg name="facebook" class="text-primary hover:text-white w-10" /></a></li>
            <li class="text-center text-white text-sm"><a target="_blank" href="https://www.instagram.com/purista.ge/"><load-svg name="instagram" class="text-primary hover:text-white w-10" /></a></li>
        </ul>
        <div class="max-w-4xl m-auto w-full mt-10 flex justify-center border-solid border-t-2 py-2 border-primary">
            <p class="text-center text-sm text-white">{{ $t('footer.parraf') }}</p>
        </div>
    </footer>
</template>