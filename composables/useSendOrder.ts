interface BasketItem {
    quantity: number;
    unit_price: number;
    product_id: string;
  }
export default async (token: string, totalPrice: number, basket: BasketItem[]) => {
    const orderID = Date.now().toString();
    const apiUrl = 'https://api.bog.ge/payments/v1/ecommerce/orders';
    const requestData = {
        callback_url: 'https://purista.ge/checkout',
        external_order_id:orderID,
        purchase_units: {
            currency: 'GEL',
            total_amount: totalPrice,
            basket: basket
        },
        redirect_urls: {
            fail: 'https://purista.ge/checkout/fail',
            success: 'https://purista.ge/checkout/thanks'
        }
    };

       const { data, error } = await useFetch(apiUrl, {
            method: 'POST',
            headers: {
                'Accept-Language': 'ka',
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestData)
        })
        if (error.value) {
            console.error(error.value)
        }
        return data.value
}
