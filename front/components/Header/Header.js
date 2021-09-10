import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import { countProductCart } from "../../actions/cartAction";




const Header = () => {
  const dispatch = useDispatch();
  const productCart = useSelector(state => state.cart.productCart);
  const reload = useSelector(state => state.cart.reloadCart);

  useEffect(() => {
    dispatch(countProductCart())
  }, [reload])

  return ( 
    <header className="header">
      <Navbar 
      />
      <span>cart {productCart}</span>
    </header>
   );
}
 
export default Header;