import { createContext, useState } from "react";

const GlobalContext = createContext()

export function GlobalProvider( {children} ){

    const [counter, setCounter] = useState(0)

    const increment = () => {
        setCounter(counter + 1)
        
    }
    const decrement = () => {
        setCounter(counter - 1)
        if (counter <= 0){
            setCounter(0)
        }
    }

    return (
        <GlobalContext.Provider value={{ counter, increment, decrement}}>{children}</GlobalContext.Provider>
    )
}

export default GlobalContext;