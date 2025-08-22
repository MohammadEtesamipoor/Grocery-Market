import React, {createContext, useContext, useEffect, useState} from "react";
import {User} from "@/types/Api/Auth";


interface Props {
    children:React.ReactNode;
}

interface AuthContextType {
    isLogin: boolean;
    login: any;
}
const AuthContext=createContext<AuthContextType>({isLogin: false,login:()=>{}});

export const useAuth=()=>useContext(AuthContext);

export function AuthContextProvider({ children }: Props) {
    const [isLogin, setIsLogin] = useState(false);

    const loginHandler = (jwt: string, user: User) => {
        window.localStorage.setItem("user", JSON.stringify(user));
        window.localStorage.setItem("token", jwt);
        setIsLogin(true);
    };

    useEffect(() => {
        if(window.localStorage.getItem("token")){
            setIsLogin(true);
        }
    })
    return (
        <AuthContext.Provider value={{ isLogin: isLogin, login: loginHandler }}>
            {children}
        </AuthContext.Provider>
    );
}
