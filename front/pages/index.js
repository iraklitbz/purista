import { useEffect } from 'react';
import BasicLayout from '../layouts/BasicLayout'
import { getLastProducts } from '../actions/productsAccions'
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import ListProductos from '../components/Productos/ListProductos/ListProductos';

export default function Home() {
  const productos = useSelector(state => state.products.productos);
  const dispatch = useDispatch();
  console.log(productos)

  useEffect(() =>{
    const fetchData = async () => {
       await dispatch(getLastProducts(4));
    }
    fetchData()

  },[])

  return (
        <BasicLayout className="home">
          <h1>Estamos en la home</h1>
          { !productos && <div>Cargando</div> }
          
          { productos && productos.length === 0 && (
            <h2>No hay productos</h2>
          ) }
          
          { productos.length > 0 && (
            productos.map(element => (
              <ListProductos
                key={element._id} 
                productos={element}
              />
            ))
          ) }
        </BasicLayout>
 
  )
}
