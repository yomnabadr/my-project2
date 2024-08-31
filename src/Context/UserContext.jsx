import { createContext ,useEffect,useState } from "react";





export let UserContext = createContext();

export default function UserContextProvider({children}){

    const [userdata, setUserData] = useState(null)

    useEffect(() => {
        if (localStorage.getItem('userTOken')) {
            setUserData(localStorage.getItem('userTOken'))
            
        }
    },[] )
    

   
    return <UserContext.Provider value={{userdata ,setUserData}}>
        {children}
    </UserContext.Provider>
}

