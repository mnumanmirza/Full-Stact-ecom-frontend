import { createBrowserRouter } from 'react-router-dom'
import Home from '../Pages/Home'
import App from '../App'
import Login from '../Pages/Login'
import ForgotPassword from '../Pages/ForgotPassword'
import Signup from '../Pages/Signup'
import AdminPanel from '../Pages/AdminPanel'
import Alluser from '../Pages/Alluser'
import Allproducts from '../Pages/Allproducts'
import CategoryProduct from '../Pages/CategoryProduct'
import ProductDetails from '../Pages/ProductDetails'
import Cart from '../Pages/Cart'
import SearchProduct from '../Pages/SearchProduct'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "forgot-password",
                element: <ForgotPassword />
            },
            {
                path: "sign-up",
                element: <Signup />
            },
            {
                path : "product-category",
                element : <CategoryProduct/>
            },
            {
                path : "product/:id",
                element : <ProductDetails/>
            },
            {
                path : 'cart',
                element : <Cart/>
            },
            {
                path : "search",
                element : <SearchProduct/>
            },
            {
                path: "Admin-Panel",
                element: <AdminPanel />,
                children: [
                    {
                        path: "all-users",
                        element: <Alluser />
                    },
                    {
                        path: "all-products",
                        element: <Allproducts />
                    }
                ]

            },
        ]
    }
])


export default router