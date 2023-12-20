export default async (token: string, orderID: string) => {
    const apiUrl = `https://api.bog.ge/payments/v1/receipt/${orderID}`;
       const data = await $fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        return data
}
