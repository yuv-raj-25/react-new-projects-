import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {

    return(
        <UserContext.>
        {children}
        </UserContext>
    )
}


export default UserContextProvider