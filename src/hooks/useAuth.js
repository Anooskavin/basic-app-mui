import { useEffect, useState } from "react"

export default () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);



    useEffect(()=>{
        console.log("hello",localStorage.getItem("basic-app")!==null)
        setIsAuthenticated(localStorage.getItem("basic-app")!==null)
    })

    return{
        isAuthenticated:  isAuthenticated,
        setIsAuthenticated: setIsAuthenticated
    }

}