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
import Booknow from "../components/Booknow/Booknow";
import Venue from "../components/venuedetail/Venue";
import Profile from "../components/Profile/Profile";
import Success from "../components/Success/Success";
import Failed from "../components/Failed/Failed";

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
                path:"/venuedetail",
                element:<Each/>

            },
            {

                path:"/events",
                element:<Event/>
            },
            {

                path:"/booking/:id",
                element:<Booknow/>
            },
            {
                path:"/success",
                element:<Success/>
            },
            {
                path:"/fail",
                element:<Failed/>
            },
            {
                path:"/venues/:id",
                element:<Venue/>
            },
            {
                path:"/profile",
                element:<Profile/>
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