import {createBrowserRouter} from 'react-router-dom'
import App from '../App'



import { LoginPage } from '../pages/LoginPage/LoginPage'
import Dashboard from '../pages/Dashboard'

import  {AddProductPage}  from '../pages/AddProductPage'
import ListedProductsPage from '../pages/ListedProductsPage'
import AllOrdersPage from '../pages/AllordersPage'

export const routes=createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                path:'/',
                element:<Dashboard/>
            },
           {
                path:'orders',
                element:<AllOrdersPage/>
            },
            {
                path:'dashboard',
                element:<Dashboard/>
            },{
                path:'listed-products',
                element:<ListedProductsPage/>
            },{
                path:'product-listing',
                element:<AddProductPage/>
            }

        ]
    },
    {
        path:'/login',
        element:<LoginPage/>
    },
   
])