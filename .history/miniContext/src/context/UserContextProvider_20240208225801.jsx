import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {

    return(
        <UserContext.Provider>
        {children}
        </UserContext.>
    )
}


export default UserContextProvider