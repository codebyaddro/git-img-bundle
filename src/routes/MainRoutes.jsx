import { createBrowserRouter } from "react-router";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Product from "../pages/Product";
import CheckOut from "../pages/CheckOut";
import SignUp from "../auth/SignUp";
import Login from "../auth/Login";
import Contact from "../pages/Contact";

const MainRoutes = createBrowserRouter ([{
    path: '/',
    element: <Layout/>,
    children: [
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/products',
            element: <Product/>
        },
        {
            path: '/checkout',
            element: <CheckOut/>
        },
        {
            path: '/contact',
            element: <Contact/>
        },
        {
            path: '/signup',
            element: <SignUp/>
        },
        {
            path: '/login',
            element: <Login/>
        },
    ]
}]);
export default MainRoutes;