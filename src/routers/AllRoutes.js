import { Routes, Route } from "react-router-dom";
import HomePage from './../Pages/Home/HomePage';
import ProductList from './../Pages/Products/ProductList';
import ProductDetail from './../Pages/Products/ProductDetail';
import Login from '../Pages/SignUp/Login';
import Register from "../Pages/SignUp/Register";
import CartPage from './../Pages/cart/CartPage';
import { ProtectedRoutes } from "./ProtectedRoutes";
import OrderPage from "../Pages/Order/OrderPage";
import DashboardPage from './../Pages/Dashboard/DashboardPage';
import PageNotFound from './../Pages/PageNotFound';





const AllRoutes = () => {
  return (
    <main>
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="products" element={<ProductList/>}/>
        <Route path="products/:id" element={<ProductDetail/>}/>
       <Route path="login" element={<Login/>}/>
       <Route path="register" element= {<Register/>}/>
        <Route path="cart" element= {<ProtectedRoutes><CartPage/></ProtectedRoutes>}/>
        <Route path="your-order" element= {<ProtectedRoutes><OrderPage/></ProtectedRoutes>}/>
        <Route path="dashboard" element= {<ProtectedRoutes><DashboardPage/></ProtectedRoutes>}/>
        <Route path="*" element={<PageNotFound/>}/>
    </Routes>
    </main>
    
  )
}

export default AllRoutes
