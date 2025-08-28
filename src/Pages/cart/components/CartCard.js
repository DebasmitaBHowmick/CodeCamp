import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { removeCart } from "../../../redux/CartListSlice";


const CartCard = ({item}) => {
  const {id, name, price, image_local, poster} = item;
  const dispatch= useDispatch();

  return (
   <div className="flex flex-wrap justify-between border-b dark:border-slate-700 max-w-4xl m-auto p-2 mb-5 ">
      <div className="flex">
          <Link to={`products/${id}`}>
            <img className="w-32 rounded" src={image_local || poster} alt={name} /> 
          </Link>
          <div className="">
            <Link to={`products/${id}`}>
              <p className="text-lg ml-2 dark:text-slate-200">{name}</p>
            </Link>            
            <button onClick={() => dispatch(removeCart(id))}className="text-base ml-2 text-red-400">Remove</button>
          </div>
      </div>
      <div className="text-lg m-2 dark:text-slate-200">
        <span>${price}</span>
      </div>
    </div>
  )
}

export default CartCard
