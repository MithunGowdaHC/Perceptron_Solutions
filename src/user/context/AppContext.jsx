import { createContext } from "react";

export const AppContext = createContext()

const AppContextProvider = (props) => {
    value = {

    }

    return (
        <AppContext.Provider>
            {props.children}
        </AppContext.Provider>
    )

}

export default AppContextProvider