<template>
    <header class="bg-black">
        <div class="main-logo py-5">
            <nuxt-link to="/">
                <img class="w-24 md:w-36 mx-auto" :src="require(`~/assets/logo.png`)">
            </nuxt-link>
        </div>
        <Navbar />
    </header>
</template>