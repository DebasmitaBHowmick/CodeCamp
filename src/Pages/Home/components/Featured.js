
import { useEffect, useState } from 'react';
import ProductCard from '../../../components/Others/ProductCard';
import { featuredProduct } from '../../../services';
import { toast } from 'react-toastify';



const Featured = () => {

const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(true);


useEffect(()=> {
  async function featureFetchUrl() {
    try {
     
      const data = await featuredProduct()
      //console.log(data)
      setProducts(data)
    } catch (error) {
      toast.error(error.message || "Not found");
      //console.error(error)
    }finally{
      setLoading(false);
    }
  };
  featureFetchUrl()
},
[]);//eslint-disable-line


  return ( 
     <section className="my-20">
      {loading ? (
        <p className='darka: text-white text-5xl text-center'>...Loading our best products</p>
      ) : products.length === 0 ? (
        <p className="text-center text-gray-500">
          No featured products available.
        </p>
      ) : (
        <>
          <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">
            Featured eBooks
          </h1>
          <div className="flex flex-wrap justify-center lg:flex-row">
            {products.map((product) => {
              // Fallback to _id or productId if id is missing
              //const productId = product.id ?? product._id ?? product.productId;
              return <ProductCard key={product.id ?? product._id ?? product.productId} product={product} />;
            })}
          </div>
        </>
      )}
    </section>
  )
}

export default Featured
