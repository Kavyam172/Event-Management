import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout"
import Hero from "../components/Hero/Hero";
import Error from "../components/error/Error";

import Host from "../components/hostevent/Host";

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

            }
        ]
    }
])

export default Router