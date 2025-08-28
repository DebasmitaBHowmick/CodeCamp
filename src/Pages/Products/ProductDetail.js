import UseTitle from "../../hooks/UseTitle";
import { toast } from "react-toastify";
import Ratings from "./Ratings";
import { useEffect, useState } from "react"
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { removeCart, AddToCart } from "../../redux/CartListSlice";
import { getProduct } from "../../services";



const ProductDetail = () => {
  const {id} = useParams()
  const [product, setProduct] = useState({});
  const [inCart, setInCart] = useState(false);
  UseTitle(product.name);

  useEffect(()=> {
     async function fetchProducts() {
        try {
          const response = await getProduct(id)
          setProduct(response.data)
        } catch (error) {
          const errorMsg= error.response?.data?.message || error.message ||
             "Something went wrong ❌";
          toast.error(errorMsg);
        }
      }
      fetchProducts()
    }, [id])

  const dispatch = useDispatch();
const cartState = useSelector((state) => state.cart.cartList);
  //to handle the buttons of adding cart
useEffect(()=> {
    const productInCart = cartState.find((item) => item.id === product.id)

    if (productInCart){
        setInCart(true)
    }else{
        setInCart(false)
    }
},[cartState, product.id])
  
  return (
    <main>
    <section>
          <h1 className="mt-10 mb-5 text-4xl text-center font-bold text-gray-900 dark:text-slate-200">{product.name}</h1>
          <p className="mb-5 text-lg text-center text-gray-900 dark:text-slate-200">{product.overview}</p>
          
          <div className="flex flex-wrap justify-around">
            <div className="max-w-xl my-3">
              <img className="rounded" src={product.poster || product.image_local} alt={product.name} />
            </div>
            <div className="max-w-xl my-3">
              <p className="text-3xl font-bold text-gray-900 dark:text-slate-200">
                <span className="mr-1">$</span>
                <span className="">{product.price}</span>
              </p>
              <div className="my-3"> 
                <span>
                  <Ratings rating={product.rating}/>
                </span>
              </div>
              <div className="my-4 select-none">
                {product.best_seller && <span className="font-semibold text-amber-500 border bg-amber-50 rounded-lg px-3 py-1 mr-2">BEST SELLER</span>}   
               {product.in_stock ? (<span className="font-semibold text-emerald-600	border bg-slate-100 rounded-lg px-3 py-1 mr-2">INSTOCK</span>) 
               : (<span className="font-semibold text-rose-700 border bg-slate-100 rounded-lg px-3 py-1 mr-2">OUT OF STOCK</span>)} 
              
                <span className="font-semibold text-blue-500 border bg-slate-100 rounded-lg px-3 py-1 mr-2">{product.size}</span>
              </div>
              <div className="my-3">
             {inCart ? (<button onClick= {()=> dispatch(removeCart(product.id))} className={`inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800 ${product.in_stock ? "" : "cursor-not-allowed"}`} disabled={!product.in_stock}>Remove <i className="ml-1 bi bi-trash3"></i></button> )
                 : ( <button onClick= {()=> dispatch(AddToCart(product))}className={`inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 ${product.in_stock ? "" : "cursor-not-allowed"}`} disabled={!product.in_stock }>Add To Cart <i className="ml-1 bi bi-plus-lg"></i></button>)}

              </div>
              <p className="text-lg text-gray-900 dark:text-slate-200">
                {product.long_description}
              </p>
            </div>
          </div>
        </section>
    </main> 
  )
}

export default ProductDetail
