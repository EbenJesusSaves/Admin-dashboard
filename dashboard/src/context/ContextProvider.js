import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const intialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(intialState);
  const [screenSize, setScreenSize] = useState(undefined);

  const handleClick = (val) => {
    setIsClicked({ ...intialState, [val]: true });
  };

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        handleClick,
        setActiveMenu,
        isClicked,
        setIsClicked,
        screenSize,
        setScreenSize,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
