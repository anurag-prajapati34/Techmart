import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import { HomePage } from '../pages/HomePage/HomePage'
import { ProductDetailPage } from '../pages/ProductDetailPage/ProductDetailPage'
import CartPage from '../pages/Cart'
import  LoginPage  from '../pages/LoginPage/LoginPage'
import  SignupPage  from '../pages/SignupPage/SignupPage'
import Contact from '../pages/Contact/Contact'
import  ShopPage  from '../pages/Shop'

import AboutUs from '../pages/AboutUs'
import BuyPage from '../pages/BuyPage'
import UserOrder from '../pages/UserOrders'





export const routes=createBrowserRouter([
    {
path:'/',
element:<App/>,
children:[
    {
        path:'/',
        element:<HomePage/>
    },{
        path:'product-detail',
        element:<ProductDetailPage/>,
     
    },{
        path:'cart',
        element:<CartPage/>
    },
    {
        path:'contact-us',
        element:<Contact/>
    },{
        path:'shop',
        element:<ShopPage/>
    },{
        path:'order',
        element:<BuyPage/>
    },{
        path:'user-orders',
        element:<UserOrder/>
    },{
        path:'about',
        element:<AboutUs/>
    }
]
    },
    {
        path:'/signup',
        element:<SignupPage/>
    },
    {
        path:'/login',
        element:<LoginPage/>
    },
  
    
])