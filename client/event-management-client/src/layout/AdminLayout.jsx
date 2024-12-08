import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Admin/Sidebar/Sidebar";

export default function AdminLayout() {
    return (
        <>
            {/* create a layout for the admin panel with the following components:
            1. sidebar to the left
            2. the maint content covering the rest of the screen */}
            

            <div className="flex">
                {/* Sidebar */}
                <Sidebar/>
                {/* <SidebarDemo /> */}
                
                {/* Main Content */}
                <Outlet />

            </div>


        </>
    )
}