import Link from "next/link";
import { BASE_PATH } from "../../../api/constants";

const ListProductos = ({ productos }) => {
  const { title, price, _id, url, image } = productos;
  return (
    <div className="card"> 
      <div className="card-header">
          <h2>{ title }</h2>
      </div>
      <div className="card-body">
          <img src={`${BASE_PATH}${image.url}`} />
      </div>
      <div className="card-footer">
        <span>{ price }</span>
        <Link href={`/${url}`}><a>See more</a></Link>
      </div>
    </div>
   );
}
 
export default ListProductos;