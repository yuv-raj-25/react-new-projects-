import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {
    c

    return(
        <UserContext.Provider>
        {children}
        </UserContext.Provider>
    )
}


export default UserContextProvider