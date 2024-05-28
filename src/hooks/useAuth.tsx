import { useState } from "react";
import Cookies from "universal-cookie";

export default () => {


  const [isAuthenticated, setIsAuthenticated]  =  useState<string>('');

  const cookies = new Cookies();


  

  const handleLogin = async (loginData) => {
    const response = await fetch('http://127.0.0.1:3001/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });
    const userDetails = await response.json();

    console.log(userDetails)

    if(userDetails.status === 200){
        cookies.set("access_token", userDetails.access_token, { path: '/', secure: true })
        setIsAuthenticated(userDetails.access_token)
        
    }

    
    return userDetails
  };

  return {
    cookies: cookies,
    handleLogin: handleLogin,
    isAuthenticated: isAuthenticated,
    setIsAuthenticated: setIsAuthenticated,
  };
};
