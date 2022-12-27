import React from "react";
import {Routes, Route} from "react-router-dom";
import Cart from "./pages/Cart";
import SignUp from "./pages/SignUp";
import CheckOut from "./pages/CheckOut";
import Shop from "./pages/Shop";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductDetails from "./pages/ProductDetails";
import AddProduct from "./admin/AddProduct";

const Routers = () => {


    return (
        <>
           <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/shop" element={<Shop />} />
               <Route path="/shop/:id" element={<ProductDetails />} />
               <Route path="/cart" element={<Cart />} />
               <Route path="/signup" element={<SignUp />} />
               <Route path="/login" element={<Login />} />
               <Route path="/checkout" element={<CheckOut/>}/>
               <Route path="/add" element={<AddProduct/>}/>
               <Route path="/" element={<Home />} />
           </Routes>
        </>
    )
}
export default Routers;