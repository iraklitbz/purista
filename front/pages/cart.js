import { useEffect, useState } from 'react';
import BasicLayout from "../layouts/BasicLayout";
import { useSelector } from "react-redux";
import { CART } from '../api/constants';
import FullCart from '../components/carrito/FullCart/FullCart';
import EmptyCart from '../components/carrito/EmptyCart';

const Cart = () => {
  const reload = useSelector(state => state.cart.reloadCart);
  const [products, setProducts] = useState(null)

  useEffect(() => {
    getProducts()
  },[reload])



  const getProducts = () => {
    const cart = localStorage.getItem(CART);
    if(!cart) {
      setProducts(null)
    } else {
      const array = cart.split(",");
      setProducts(array)
    }
  }
  
  return !products ? <BasicLayout><EmptyCart /></BasicLayout> : <BasicLayout><FullCart products={products} /></BasicLayout>;
}
 
export default Cart;
