import React from "react";
import { NavLink } from "react-router-dom";


const FoodList = ['burrito', 'pizza', 'pasta', 'shwarma', 'steak']

const NavBar = () =>{

    return(
        FoodList.map((food, indx) => <NavLink to={`/food/${food}`} key={indx}> {food} </NavLink>)
    )
}
export default NavBar;
