import React,{useState,createContext,useContext} from "react";
const AuthContext = createContext();

export function useAuth(){
    return useContext(AuthContext);
}

export const AuthProvider = (props)=>{
    const [authUserToken,setAuthUserToken] = useState(null);
    const [isLoggedIn,setIsLoggedIn] = useState(false);

    const login = (userData) => {
        setAuthUserToken(userData);
        setIsLoggedIn(true);
      };
    
      const logout = () => {
        setAuthUserToken(null);
        setIsLoggedIn(false);
      };

    const value = {
        login,
        authUserToken,
        setAuthUserToken,
        isLoggedIn,
        setIsLoggedIn,
        logout
    }

    return (
        <AuthContext.Provider value={value}>
            {props.children}
        </AuthContext.Provider>
    )

}