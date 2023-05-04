import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import CardDetails from "../pages/CardDetails/CardDetails";
import Blog from "../pages/Blog/Blog";
import Error from "../Error";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import PrivateRoute from "./PrivateRoute";

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
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
                
            {
                path:'/cards-details/:chefId',
                element: <PrivateRoute><CardDetails></CardDetails></PrivateRoute>
            },
           
            {
                path: '*',
                element: <Error></Error>
            }
            
        ]
    },
 
])

export default router;