import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { router } from './App'
import {RouterProvider} from 'react-router-dom'
import ProductsProvider from './productContext/context'
ReactDOM.createRoot(document.getElementById('root')!).render(
    <ProductsProvider>
    <RouterProvider router={router}/>
    </ProductsProvider>
)
