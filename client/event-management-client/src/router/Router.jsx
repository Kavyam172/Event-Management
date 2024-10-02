import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout"
import Hero from "../components/Hero/Hero";
import Error from "../components/error/Error";
import Register from "../components/registerinevent/Register";
import Host from "../components/hostevent/Host";
import Each from "../components/eachevent/Each";
import Signup from "../components/signup/Signup";
import Event from "../components/allEvents/Event";
import Signin from "../components/signin/Signin";

const Router = createBrowserRouter([
    {
        path:'/',
        element:(<MainLayout/>),
        children:[
            {
                index:true,
                element:<Hero/>
            },
            {
                path:"/*",
                element:<Error/>
            },
            {
                path:"/create",
                element:<Host/>

            },
            {
                path:"/register",
                element:<Register/>

            },
            {
                path:"/event/:id",
                element:<Each/>

            },
            {
                path:"/events",
                element:<Event/>
            }
           
        ]
    },
    {
        path:'/signup',
        element:<Signup/>
    },
    {
        path:'/signin',
        element:<Signin/>
        
    }
    

])

export default Router