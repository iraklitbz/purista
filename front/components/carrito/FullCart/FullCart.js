import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { removeProductCart } from "../../../actions/cartAction";
import { getProductById } from "../../../actions/productsAccions";
const FullCart = ({products}) => {
  const [productData, setProductData] = useState(null);
  const reload = useSelector(state => state.cart.productCart);
  const dispatch = useDispatch()

  useEffect(() => {
    (async() => {
      const productTemp = [];
      for await (const product of products ) {
        const data = await dispatch(getProductById(product));
        productTemp.push(data)
      }
      setProductData(productTemp);
    })();
   },[reload])
  
   const rmProductCart = (_id) => {
     dispatch(removeProductCart(_id));
   }

  return (
    <div>

        {productData
              ? (
                productData.map(element => (
                  <div key={element._id}>
                    <h2>{element.title}</h2>
                    <span onClick={() => rmProductCart(element._id)}>Borrar</span>
                  </div>
                ))
              )  :
              (
                <h3>Cargando</h3>
              )
              }
    
    </div>


  )
}
 
export default FullCart;