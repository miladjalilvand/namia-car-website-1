"use client"
import { createContext,useContext,useState } from "react";

const Loading = createContext();

export const LoadingProvider =({children}) =>{

    const [loading , setLoading]=useState(false);

    const changeLoading=()=>{
        setLoading((load)=>!load);
    }
        return (
            <Loading.Provider value={{loading ,changeLoading }}>
                {children}
            </Loading.Provider>
        );
}

export const useLoading = () => useContext(Loading);