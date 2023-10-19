import { createBrowserRouter } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/home/Home'
import Products from './pages/products/Products'
import ProductsDetails from './pages/products/productsDetails/ProductsDetails'
import Error from './pages/error/Error'
import Login from './pages/Login/Login'
import Register from './pages/register/Register'
import Carrinho from './pages/carrinho/Carrinho'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/products/:id',
        element: <Products />
      },
      {
        path: '/details/:id',
        element: <ProductsDetails />
      },
      {
        path:'/carrinho',
        element:<Carrinho/>
      },
      {
        path: '*',
        element: <Error />
      }
    ]
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'register',
    element:<Register/>
  }
])

export { router }