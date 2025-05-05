import React from "react";

function Avatar({ name, imageUrl }) {
    return (
        <img src={imageUrl} alt={`${name}'s Avatar`} />
    );
}

export default Avatar;

