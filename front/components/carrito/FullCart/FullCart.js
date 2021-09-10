import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getProductById } from "../../../actions/productsAccions";
const FullCart = ({products}) => {
  const [productData, setProductData] = useState(null);
  console.log(productData)
  const dispatch = useDispatch()
  useEffect(() => {
    (async() => {
      const productTemp = [];
      for await (const product of products ) {
        const data = await dispatch(getProductById(product));
        productTemp.push(data)
        setProductData(productTemp);
      }
    })();
   },[])
  return (
    <div>


        {productData 
              ? (
                productData.map(element => (
                  <h2 key={element._id}>{element.title}</h2>
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