
import React from "react";
import { useHistory } from "react-router-dom";

const AuthUser = () =>{
    const isAuthorized = Math.random() > 0.5
    const history = useHistory()
    return(
        isAuthorized ? <h1>Congratulations, You are authenticated!!!</h1> : history.push('/unauth')
    )
}
export default AuthUser;
