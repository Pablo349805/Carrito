import { createContext, useState } from "react";


export const UIContext = createContext()

const UIProvider = ( {children} ) => {

    const [loading, setLoading] = useState(false)

    return (
        <UIContext.Provider value={{
            loading, 
            setLoading
        }}>
            {children}
        </UIContext.Provider>
      );
}
 
export default UIProvider;