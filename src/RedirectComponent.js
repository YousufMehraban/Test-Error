import React from "react";
import { Redirect } from "react-router-dom";

const AdminDashboard =  () =>{
    const isAdmin = Math.random() > 0.5;

    return(
        isAdmin ? <h1> Welcome to Admin Dashboard Page!!!</h1> : < Redirect to='/' />
    )
}

export default AdminDashboard;
