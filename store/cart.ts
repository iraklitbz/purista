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
export const cart = defineStore({
    id: 'cart',
    state: () => ({
        toggleCart: false,
        cartProducts: <Product[]> []
    }),
    persist: {
        storage: persistedState.localStorage
    },
    getters: {
        totalQuantity(): number {
            return this.cartProducts.reduce((total, product) => total + product.quantity, 0);
        }
    },
    actions: {
        handleToggleMenu() {
            this.toggleCart = !this.toggleCart
        },
        handleCloseMenu() {
            this.toggleCart = false
        },
        addToCart(product: Product) {
            const existProductIndex = this.cartProducts.findIndex((p) => p.id === product.id)
            if (existProductIndex !== -1) {
                this.cartProducts[existProductIndex].quantity += product.quantity
            } else {
                this.cartProducts.push(product)
            }
        },
        removeFromCart(product: Product) {
            const existProductIndex = this.cartProducts.findIndex((p) => p.id === product.id);
            
            if (existProductIndex !== -1) {
              const existingProduct = this.cartProducts[existProductIndex];
              
              // Reducir la cantidad o eliminar el producto si la cantidad es 0 o menos
              existingProduct.quantity -= product.quantity;
        
              if (existingProduct.quantity <= 0) {
                // Eliminar el producto del carrito si la cantidad es 0 o menos
                this.cartProducts.splice(existProductIndex, 1);
              }
            }
        },
        handleEmptyCart() {
            this.cartProducts = []
        }
    }
})