<template>
    <section class="my-20">
        <div class="flex flex-col items-center px-6 py-8 mx-auto lg:py-0">
            <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-lg xl:p-0">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2x">
                        Login
                    </h1>
                    <form 
                        @submit.prevent="onSubmit"
                        class="space-y-4 md:space-y-6"
                    >
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-90">Your email</label>
                            <input 
                                v-model="identifier"
                                type="email" 
                                name="email" 
                                id="email" 
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-4" 
                                placeholder="name@purista.com"
                            >
                        </div>
                        <div>
                            <label 
                                for="password" 
                                class="block mb-2 text-sm font-medium text-gray-90"
                            >
                                Password
                            </label>
                            <input 
                                v-model="password"
                                type="password" 
                                name="password" 
                                id="password" 
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-4"
                            >
                        </div>
                        <button 
                            class="button m-auto w-full button--aylen px-5 py-3 bg-primary hover:bg-primary-light hover:text-white relative block focus:outline-none border-2 text-white border-solid rounded-lg text-lg text-center font-semibold tracking-widest overflow-hidden" 
                            type="submit"
                            >
                           Login
                        </button>
                        <p
                            v-if="userWrong"
                            class="text-red-500 text-center mt-5"
                        >
                            User or password wrong
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup lang="ts">
    const { login } = useStrapiAuth()
    const router = useRouter()
    const identifier = ref('')
    const password = ref('')
    const userWrong = ref(false)
    const onSubmit = async () => {
        try {
            await login({ identifier: identifier.value, password: password.value })
            userWrong.value = false
            router.push('/')
        } catch (e) {
            userWrong.value = true
        }
    }
</script>