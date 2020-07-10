import React, { useReducer, createContext } from "react";
import { reducer } from "./reducer";
import { dispatchs } from "./actions";
import { IGlobalState } from "interfaces";
const initialState: IGlobalState = {
  zIndexInit: 19,
  appList: [
    {
      name: "projects",
      icon: "projects.png",
      open: false,
      size: "100%",
      zIndex: 19,
      isActive: false,
    },
    {
      name: "bio",
      icon: "document.png",
      open: false,
      size: "100%",
      zIndex: 19,
      isActive: false,
    },
    {
      name: "mine",
      icon: "mine.png",
      open: false,
      size: "fit-content",
      zIndex: 19,
      isActive: false,
    },
    {
      name: "batak",
      icon: "maca.png",
      open: false,
      size: "100%",
      zIndex: 19,
      isActive: false,
    },
    {
      name: "shut down",
      icon: "shut.png",
      open: false,
      size: "100%",
      zIndex: 19,
      isActive: false,
    },
  ],
};
export const Context = createContext<IGlobalState | any>(initialState);

const StateProvider: React.FC = ({ children }) => {
  const [state, disp] = useReducer(reducer, initialState);
  let dispatch = dispatchs(disp);
  // debugger;
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};
export default StateProvider;
