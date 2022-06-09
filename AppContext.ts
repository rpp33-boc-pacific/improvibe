import { createContext } from "react";

const AppContext = createContext({
  user: {},
  setUser: () => {}
});

export default AppContext;