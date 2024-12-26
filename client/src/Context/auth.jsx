import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthProvider =({children})=>{


    const [token , setToken] = useState("");
    const [ user, setUser] = useState("");
    console.log(user)
 //------------------------- Store Token in Local storage------------------------------//

 const storeTokenInLS =(serverToken)=>{
  
    setToken(serverToken);
    return localStorage.setItem("QA_Token",serverToken);
    
 }
 //------------------------------------------------------------------------------------//
//------------------------------LogOut User--------------------------------------------//

const LogoutUser =()=>{
    setToken("")
    return localStorage.removeItem("QA_Token");
}
//-------------------------------------------------------------------------------------//
//------------------------------Toggle Logout and Login--------------------------------//

let isLoggedin = !!token;
//-------------------------------------------------------------------------------------//
//-----------------------------Getting User data associated with jwt Token-------------//

const getUserData = async()=>{
    
    try {
        
            console.log(token)
        
        const response = await fetch(`http://localhost:5001/user/userdata`,{
            method:'GET',
            headers:{
                "Authorization":`Bearer ${token}`
            }
        })

        if(response.ok){
     
            const data = await response.json()
            // console.log(data);
            setUser(data.userData);
        }
        
    } catch (error) {
         console.log(error);
    }
}

useEffect(()=>{
    
    if(token){
    getUserData();}
},[token])


    // *======================== Provider==============================//
    return(
        <AuthContext.Provider value={{storeTokenInLS , isLoggedin ,LogoutUser, user}}> 
            {children}
        </AuthContext.Provider>
    )
    //===============================================================//
}

 const useAuth =()=>{
    return useContext(AuthContext);
}

export { AuthProvider, useAuth };