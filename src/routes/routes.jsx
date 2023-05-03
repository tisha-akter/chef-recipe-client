import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import CardDetails from "../pages/CardDetails/CardDetails";
import Blog from "../pages/Blog/Blog";
import Error from "../Error";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path:'/cards-details/:chefId',
                element: <CardDetails></CardDetails>
            },
            {
                path: '*',
                element: <Error></Error>
              }
            
        ]
    },
 
])

export default router;