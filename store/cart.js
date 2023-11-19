import { defineStore } from 'pinia'
export const useCartStore = defineStore('cartStore', () => {
    const toggleCart = ref(false)
    const cartCookies = useCookie('cart')
    const cartProducts = ref([]);
    if (cartCookies.value) {
        cartProducts.value = cartCookies.value
    }
    const totalQuantity = computed(() => {
        return cartProducts.value.reduce((total, product) => total + product.quantity, 0);
    })
    function handleToggleMenu() {
        toggleCart.value = !toggleCart.value
    }
    function handleCloseMenu() {
        toggleCart.value = false
    }
    function addToCart(product) {
        const existProductIndex = cartProducts.value.findIndex((p) => p.id === product.id)
        if (existProductIndex !== -1) {
            cartProducts.value[existProductIndex].quantity += product.quantity
        } else {
            cartProducts.value.push(product)
        }
        cartCookies.value = cartProducts.value
    }
    function removeFromCart(product) {
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
        cartCookies.value = cartProducts.value
    }
    function handleEmptyCart() {
        cartProducts.value = [];
        cartCookies.value = cartProducts.value
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