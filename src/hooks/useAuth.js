import { useEffect, useState } from "react"

export default () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);



    useEffect(()=>{
        setIsAuthenticated(localStorage.getItem("basic-app")!==null)
    })

    return{
        isAuthenticated:  isAuthenticated,
    }

}