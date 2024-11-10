import { createContext, useEffect, useState } from "react";
import { courses } from "../../TestData/Courses";
export const AppContext = createContext()

const AppContextProvider = (props) => {
   const value = {
    courses
    }
    // console.log(courses);

    
    
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )

}

export default AppContextProvider