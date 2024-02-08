import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {
    const [user, set]

    return(
        <UserContext.Provider>
        {children}
        </UserContext.Provider>
    )
}


export default UserContextProvider