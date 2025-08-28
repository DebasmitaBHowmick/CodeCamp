
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getUser, logout } from "../../services";
import { useEffect, useState } from "react";



const LoggedIn = ({setDropDown}) => {
const navigate= useNavigate();
const [user, setUser] = useState({})

useEffect(()=> {
    async function fetchUser(){
    try {
         const data= await getUser();
        data.email ? setUser(data) : handleLogOut(); 
    } catch (error) {
        toast.error(error.message)
    }
}
    fetchUser()
}, []); //eslint-disable-line

const handleLogOut=()=>{
   logout();
    setDropDown(false);
    toast.info("Logged out successfully");
    navigate("/", {replace: true});
};


  return (
     <div id="dropdownAvatar" className="select-none	absolute top-10 right-0 z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
        <div className="py-3 px-4 text-sm text-gray-900 dark:text-white">
            <div className="font-medium truncate text-bold">{user.email}</div>
        </div>
        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUserAvatarButton">
            <li>
                <Link onClick= {()=> setDropDown(false)}to="/products" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">All eBooks</Link>
            </li>
            <li>
                <Link onClick= {()=> setDropDown(false)} to="/dashboard" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
            </li>
        </ul>
        <div className="py-1">
            <button onClick={handleLogOut} className="cursor-pointer block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Log out</button>
        </div>
    </div>
  )
  
}

export default LoggedIn