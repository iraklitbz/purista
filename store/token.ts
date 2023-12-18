import { defineStore } from 'pinia';

export const useTokenStore = defineStore('tokenStore', () => {
    const config = useRuntimeConfig()
    const username = config.public.GEORGIAN_BANK_NAME
    const password = config.public.GEORGIAN_BANK_PASSWORD
    const base64Credentials = btoa(`${username}:${password}`);
    const tokenEndpoint = 'https://oauth2.bog.ge/auth/realms/bog/protocol/openid-connect/token';
    const postData = new URLSearchParams();
    postData.append('grant_type', 'client_credentials');
    const token = ref('')
    async function handleGetToken() {
        const { data, error } = await useFetch(tokenEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Basic ${base64Credentials}`,
              },
              body: postData,
        })
        if (error.value) {
            console.error(error.value)
        }
        console.log(data.value)
    }
    return { handleGetToken, token }
});