import { createContext, useContext, useState } from "react";

interface User {
  name: string;
}

interface Context {
  user: User | null;
  token: string | null;
  setUser: (user: User | null) => void;
  setToken: (token: string | null) => void;
}

const StateContext = createContext<Context>({
  user: null,
  token: null,
  setUser: () => {},
  setToken: () => {},
});

export const ContextProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>({ name: "John" });
  const [token, _setToken] = useState<string | null>(null);

  const setToken = (token: string | null) => {
    _setToken(token);
    if (token) {
      localStorage.setItem("ACCESS_TOKEN", token);
    } else {
      localStorage.removeItem("ACCESS_TOKEN");
    }
  };

  return (
    <StateContext.Provider value={{ user, token, setUser, setToken }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
