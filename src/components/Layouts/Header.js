import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom"
import {default as Logo} from "../logo/logo.png"
import Search from "../Others/Search";
import {LoggedIn, LoggedOut} from '../index';




const Header = () => {

//active of classes
 const activeClass = "text-base block py-4 m-auto px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500";
const inActiveClass = "text-base block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-black-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700";

const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem('darkMode')||false));

//setdarkMode
useEffect(()=> {
localStorage.setItem("darkMode", JSON.stringify(darkMode));
if (darkMode) {
  document.documentElement.classList.add('dark')
}else{
  document.documentElement.classList.remove('dark')
}

},[darkMode])

const [showSearch, setShowSearch] = useState(false);
const [dropdown, setDropDown] = useState(false);
const [hidden, setHidden] = useState(true);

//to add the accesstoken
const token = JSON.parse(sessionStorage.getItem("token"))

//To show the amount of products in the cart
const cartState = useSelector((state) => state.cart.cartList);

return (
    <header>
        <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                <img src={Logo} className="h-8" alt="codecamp Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">CodeCamp</span>
            </Link>

            {/* For phone */}
            <button onClick={() => setHidden(!hidden)}data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
            aria-controls="navbar-dropdown" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>


          {/* Mobile Menu */}
        <div className={`${hidden ? "hidden" : "block"} w-full md:hidden`} id="navbar-dropdown">
          <ul className="flex flex-col font-medium p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">

    {/* Profile */}
    <li>
      <span type="button"
        onClick={() => setDropDown(!dropdown)} className={`${dropdown ? activeClass : inActiveClass} cursor-pointer text-2xl bi bi-person-circle relative`}
      ></span> {dropdown && (token ? <LoggedIn setDropDown={setDropDown}/> : <LoggedOut setDropDown={setDropDown}/>)} 
    </li>

    {/* Search */}
    <li type="button" onClick={() => setShowSearch(!showSearch)}>
      <span className={`${showSearch ? activeClass : inActiveClass} bi bi-search`}></span>
    </li>

    {/* Cart */}
    <li>
      <NavLink
        to="/cart"
        className={({ isActive }) =>`${isActive ? activeClass : inActiveClass} text-lg bi bi-cart-fill relative`}
      ><span className="text-white text-sm absolute -top-1 left-2.5 bg-rose-500 px-1 rounded-full">
          {cartState.length}
        </span>
      </NavLink>
    </li>

    {/* Dark/Light Mode Toggle */}
    <li>
      <button onClick={() => setDarkMode(!darkMode)}
        className={ darkMode ? "text-white cursor-pointer round bi bi-brightness-high" : "bi bi-moon-stars"}></button>
    </li>
  </ul>
</div>

            {/* For Desktop */}
            <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
              <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                
                <li>
                     <span type="button" onClick={() => setDropDown(!dropdown)}  className={
                 `${dropdown ? activeClass : inActiveClass} cursor-pointer text-2xl bi bi-person-circle relative`}></span>
                 
                   {dropdown && (token ? <LoggedIn setDropDown = {setDropDown}/> : <LoggedOut setDropDown= {setDropDown}/>)} 
                </li>
                <li type = "button" onClick= {() => setShowSearch(!showSearch)}><span
                 className={`${showSearch ? activeClass :  inActiveClass} bi bi-search`}>  
                    </span>
                </li>
                <li>
                  <NavLink to="/cart" className={({ isActive }) => `${isActive ? activeClass :  inActiveClass} text-lg bi bi-cart-fill relative`}>
                  <span className="text-white text-sm absolute -top-1 left-2.5 bg-rose-500 px-1 rounded-full">{cartState.length}</span>
                  </NavLink>
                </li>
               
                <button onClick={()=> setDarkMode(!darkMode)} 
                  className={darkMode ? "text-white cursor-pointer round bi bi-brightness-high" : "bi bi-moon-stars"}>
                </button>
              </ul>
            </div>
          </div>
        </nav>
      <>
      {showSearch &&   <Search setShowSearch= {setShowSearch}/>}
      
    
      </>
    </header>
    
   
  )
}

export default Header
