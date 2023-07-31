import { createContext, useContext, useState } from "react";

const StateContext = createContext({
  user: null,
  token: null,
});

export const ContextProvider = ({ childern }) => {
  const [user, setUser] = useState({});
  const [token, _setToken] = useState({});

  const setToken = (token) => {
    _setToken(token);
    if (token) {
      localStorage.setItem("ACCESS_TOKEN", token);
    } else {
      localStorage.removeItem("ACCESS_TOKEN");
    }
  };

  return (
    <StateContext.Provider
      value={{
        user,
        token,
        setUser:  () =>  {},
        setToken: () => {}
      }}
    >

    </StateContext.Provider>
  );
};
export const useStateContext = () => useContext(StateContext)
