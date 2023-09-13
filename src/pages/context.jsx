import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [Name, setFName] = useState("");
  const [LastName, setLName] = useState("");
  const [Email, setEmail] = useState("");
  const [Number, setNumber] = useState("");
  const [Message, setMessage] = useState("");

  return (
    <AppContext.Provider
      value={{
        Name,
        setFName,
        LastName,
        setLName,
        Email,
        setEmail,
        Number,
        setNumber,
        Message,
        setMessage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
