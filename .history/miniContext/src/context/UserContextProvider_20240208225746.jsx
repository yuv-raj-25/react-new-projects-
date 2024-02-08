import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {

    return(
        <UserContext>
        {children}
        </>
    )
}


export default UserContextProvider