import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {
    cp

    return(
        <UserContext.Provider>
        {children}
        </UserContext.Provider>
    )
}


export default UserContextProvider