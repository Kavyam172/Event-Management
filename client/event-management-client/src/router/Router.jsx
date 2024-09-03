import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout"
import Hero from "../components/Hero/Hero";
import Error from "../components/error/Error";
import Register from "../components/registerinevent/Register";
import Host from "../components/hostevent/Host";
import Each from "../components/eachevent/Each";
import Sign from "../layout/Sign";
import Signup from "../components/signup/Signup";
import Signin from "../components/signin/Signin";
import Event from "../components/allEvents/event";
import Each from "../components/eachevent/Each";

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
                path:"/events",
                element:<Event/>

            },
            {
                path:"/event/:id",
                element:<Each/>
            },
            {
                path:"/aboutevent",
                element:<Each/>

            }
           
        ]
    },
    {
        path:'/signup',
        element:(<Sign/>),
        children:[
            {
                index:true,
                element:<Signup/>
            },
        ]
    }
    

])

export default Router