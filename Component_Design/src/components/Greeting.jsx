import React from "react";

function Greeting({ name, timeOfDay }) {
    return (
        <h3>Good {timeOfDay} { name }!</h3>
    )
}
 
export default Greeting;