import React from "react";  
import Avatar from "./Avatar";
import UserInfo from "./UserInfo"

function UserProfile({ name, imageUrl, email, bio }) {
    return (
        <div className="user-profile">
            <Avatar name={name} imageUrl={imageUrl} />
            <UserInfo name={name} email={email} bio={bio} />
        </div>
    );
}

export default UserProfile;