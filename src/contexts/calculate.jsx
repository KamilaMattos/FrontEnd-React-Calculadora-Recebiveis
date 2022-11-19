import { createContext, useState } from "react";
import { api } from "../api";

export const CalculateContext = createContext();

export const CalculateProvider = ({children}) =>{

    const [value, setValue] = useState({});

    const calculateAnticipation = (data) =>{
        api.post("", data).then(resp => setValue(resp.data)).catch(err => console.log(err))
    }

    return(
        <CalculateContext.Provider value={{value, calculateAnticipation}}>
            {children}
        </CalculateContext.Provider>
    )

}
