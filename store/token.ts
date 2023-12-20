import { defineStore } from 'pinia';
interface TokenResponse {
    access_token: string,
    expires_in: number
    token_type: string,
    refresh_expires_in: number
}
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
        const { data, refresh, error } = await useFetch<TokenResponse>(tokenEndpoint, {
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
        if (data.value) {
            token.value = data.value.access_token
            setTimeout(() => {
                refresh()
            }, data.value.expires_in)
        }
    }
    return { handleGetToken, token }
});