import { createBrowserRouter } from "react-router";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Product from "../pages/Product";

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
    ]
}]);
export default MainRoutes;