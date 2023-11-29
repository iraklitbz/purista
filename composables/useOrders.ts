export default async (
    direction: String,
    name: String,
    email: String,
    company: String,
    date: String,
    payed: String,
    products: Array<any>
) => {
    const config = useRuntimeConfig()
    const CEM_URL = config.public.CEM_URL
    const data = await $fetch(`${CEM_URL}/api/orders`, {
        method: 'POST',
        body: {
            data: {
                direction: direction,
                name: name,
                email: email,
                company: company,
                date: date,
                payed: payed,
                products: products
            }
        }
    }).catch(error => error.data)
    const orders = (data as any)
    return orders
}
