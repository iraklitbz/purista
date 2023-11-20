import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
interface Product {
    quantity: number,
    id: string
    attributes: {
        title: string
        price: number
        slug: string
        feature: {
            data: {
                attributes: {
                    url: string
                    formats: {
                        small: {
                            url: string
                        }
                    }
                }
            }
        }
    }
}
export const useCartStore = defineStore('cartStore', () => {
    const toggleCart = ref(false)
    const cartProducts = ref<Product[]>([])
    const cartCookies = useCookie<Product[]>('cart', {default: () => []})
    if(cartCookies.value) {
        cartProducts.value = cartCookies.value
    }
    const totalQuantity = computed(() => {
        return cartProducts.value.reduce((total, product) => total + product.quantity, 0);
    })
    watch(cartProducts, (newValue) => {
        cartCookies.value = newValue
    })
    function handleToggleMenu() {
        toggleCart.value = !toggleCart.value
    }
    function handleCloseMenu() {
        toggleCart.value = false
    }
    function addToCart(product: Product) {
        const existProductIndex = cartProducts.value.findIndex((p) => p.id === product.id)
        if (existProductIndex !== -1) {
            cartProducts.value[existProductIndex].quantity += product.quantity
        } else {
            cartProducts.value.push(product)
        }
    }
    function removeFromCart(product: Product) {
        const existProductIndex = cartProducts.value.findIndex((p) => p.id === product.id);
        
        if (existProductIndex !== -1) {
          const existingProduct = cartProducts.value[existProductIndex];
          
          // Reducir la cantidad o eliminar el producto si la cantidad es 0 o menos
          existingProduct.quantity -= product.quantity;
    
          if (existingProduct.quantity <= 0) {
            // Eliminar el producto del carrito si la cantidad es 0 o menos
            cartProducts.value.splice(existProductIndex, 1);
          }
        }
    }
    function handleEmptyCart() {
        cartProducts.value = [];
    }
    return { 
            handleToggleMenu,
            handleCloseMenu, 
            addToCart, 
            removeFromCart, 
            handleEmptyCart, 
            toggleCart, 
            cartProducts, 
            totalQuantity
        }  
  })