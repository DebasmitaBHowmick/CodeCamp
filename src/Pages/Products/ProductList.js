import UseTitle from "../../hooks/UseTitle";
import ProductCard from '../../components/Others/ProductCard';
import ProductFilter from './ProductFilter';
import { useEffect, useState } from 'react';
import { useLocation } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../redux/FilterSlice";
import { getProductList } from "../../services";
import { toast } from "react-toastify";




const ProductList = () => {
  //for toggling the filterBar:
const [toggle, setToggle] = useState(false)

const dispatch = useDispatch();
const products = useSelector((state) => state.filter.filterList);
const [loading, setLoading] = useState(true)


const search = useLocation().search;
//console.log(search)
const queryTerm = new URLSearchParams(search).get('q')
//console.log(queryTerm)

useEffect(()=> {
  async function fetchProducts() {
    try {
      const data = await getProductList(queryTerm)
       dispatch(setProducts(data))
    } catch (error) {
      const errorMsg= error.response?.data?.message || error.message ||
      "Something went wrong ❌";
      toast.error(errorMsg)
      
    }finally{
      setLoading(false)
    }
  }
  fetchProducts()
}, [queryTerm, dispatch])

//for dynamic title
UseTitle("Explore your eBooks here!")

  return (
     <main>
        <section className="my-5">
          <div className="my-5 flex justify-between">
            <span className="text-2xl font-semibold dark:text-slate-100 mb-5">Learn Amigos! your eBooks are waiting for you({products.length})</span>
            <span>
              <button onClick={()=> setToggle(!toggle)} id="dropdownMenuIconButton" 
              data-dropdown-toggle="dropdownDots" className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-700" type="button"> 
               <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path></svg> 
              </button>
            </span>            
          </div>    

          <div className="flex flex-wrap justify-center lg:flex-row">
            {loading ? <p className="dark: text-white text-3xl">.....Loading products</p>
            : products.length === 0 ? (
        <p className="text-center text-gray-500">No featured products available </p>
      ) : ( <>
            {products.map((product)=> <ProductCard key={product.id} product={product}/>)}
            </>)}
          
          </div>  
        </section>
        {toggle && <ProductFilter setToggle = {setToggle}/>}
        
      </main> 
  )
}

export default ProductList
