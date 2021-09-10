import { BASE_PATH } from "../../../api/constants";
import { useDispatch } from "react-redux";
import { addProductCart } from "../../../actions/cartAction";

const Product = ({producto}) => {
   const dispatch = useDispatch();
   const {title, price, image, summary, table, _id} = producto;
   console.log(producto)

   const addProduct = (product) => {
       dispatch(addProductCart(product));
   }


  return ( 
   <div>
      <h1>{title}</h1>
      <span>{price}</span>
      <img src={`${BASE_PATH}${image.url}`} />
      <p>{summary}</p>
      <div dangerouslySetInnerHTML={{__html: table}} />
      <span onClick={() => addProduct(_id)}>Comprar</span>
   </div>
   );
}
 
export default Product;