import { createContext } from "react";

export const UserContext = createContext();

const UserContextProvider = (props) => {
  value = {};

  return <UserContext.Provider>{props.children}</UserContext.Provider>;
};

export default UserContextProviderer;
