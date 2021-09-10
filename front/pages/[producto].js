import { useEffect } from "react";
import { useRouter } from 'next/router'
import BasicLayout from "../layouts/BasicLayout";
import {useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import { getProductByUrl } from "../actions/productsAccions";
import Product from "../components/Productos/Product";

const Producto = () => {
  const producto = useSelector(state => state.products.producto);
  const dispatch = useDispatch();
  const { query } = useRouter();

  useEffect(() =>{
    const fetchData = async () => {
       await dispatch(getProductByUrl(query.producto));
    }
    fetchData()

  },[query])

  if(!producto) return null;

  return (
    <BasicLayout className="product-page"> 
     <Product
        producto={producto} 
     />
      
    </BasicLayout>
   );
}
 
export default Producto;

