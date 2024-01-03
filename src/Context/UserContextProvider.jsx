
import React, { useState } from "react";
import UserContext from "./userContext";

const [user , setUser ] = useState('')

const userContextProvider = ({children})=>{
    <UserContext.Provider value={{user , setUser}}>
        {children}
    </UserContext.Provider>
}


export default userContextProvider