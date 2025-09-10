import { Link } from "react-router-dom";
import Icon from "./img/icon.png"

import { useEffect, useState } from "react";
import { getUser } from "../../../services";
import { toast } from "react-toastify";

const Main = () => {

const [user, setUser] = useState(null);
  useEffect(() => {

    async function fetchname() {
      try {
        const data = await getUser();
        if (data && data.name) {
          setUser(data)
        }else{
          setUser(null);
        }
      } catch (error) {
        toast.error("Error fetching user:", error);
        setUser(null)
      };
    }
    fetchname()
  }, []);//eslint-disable-line


  return (
     <section className="flex flex-col lg:flex-row dark:text-slate-100 items-center">
        <div className="text my-5">
            <h1 className="text-5xl font-bold">The Ultimate eBook Store</h1>
            {user ? (<p className="text-2xl font-bold">Welcome to the CodeCamp {user.name}</p>) : ""}
            <p className="text-2xl my-7 px-1 dark:text-slate-300">CodeCamp! : A one-stop e-commerce platform for e-books, bringing stories, knowledge, and learning to your fingertips.<br/>
            Shop smarter, read faster—unlock endless e-books with just a click</p>
            <Link to="/products" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"> Explore eBooks</Link>
        </div>
        <div className="visual my-5 lg:max-w-xl">
            <img className="rounded-lg max-h-full" src={Icon} alt="CodeCampSection" />
        </div>
    </section>
  )
 
}

export default Main