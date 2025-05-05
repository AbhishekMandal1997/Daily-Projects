import React from "react";

function LoginMessage({ isLoggedIn }) { 
    if (isLoggedIn) {
        return <h2>Welcome back, User!</h2>;
    } else {
        return <h2>Please log in.</h2>;
    }
}

export default LoginMessage;

