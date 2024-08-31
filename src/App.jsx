import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './component/Layout/Layout'
import Products from './component/Products/Products'
import Login from './component/Login/Login'
import Register from './component/Register/Register'
import Brands from './component/Brands/Brands'
import Carts from './component/Carts/Carts'
import Notfound from './component/Notfound/Notfound'
import Home from './component/Home/Home'
import UserContextProvider from './Context/UserContext'
import ProductDetails from './component/ProductDetails/ProductDetails'
import CartContextProvider from './Context/CartContext'
import { Toaster } from 'react-hot-toast'
import Checkout from './component/Checkout/Checkout'
import Allorders from './component/Allorders/Allorders'
import Categories from './component/Categories/Categories'
import ForgotPassword from './component/forgotPassword/forgotPassword'
import ResetPassword from './component/resetPassword/resetPassword'
import WishList from './component/WishList/WishList'





let routers = createBrowserRouter([
  {
    path: '', element: <Layout />, children: [

      { index: true, element: <Home /> },
      { path: 'product', element: <Products /> },
      { path: 'productdetails/:id/:category', element: <ProductDetails /> },
      { path: 'brands', element: <Brands /> },
      { path: 'categories', element: <Categories /> },
      { path: 'allorders', element: <Allorders /> },
      { path: 'checkout', element: <Checkout /> },
      { path: 'carts', element: <Carts /> },
      { path: 'wishList', element:<WishList/>},

      { path: 'forgotPassword', element: <ForgotPassword/> },
      { path: 'resetPassword', element:<ResetPassword/> },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },

      { path: '*', element: <Notfound /> },

    ]
  }
])



function App() {

  return (<>

 <CartContextProvider>
      <UserContextProvider>
        <RouterProvider router={routers}></RouterProvider>
        <Toaster />
      </UserContextProvider>
    </CartContextProvider>

  </>)
}

export default App
