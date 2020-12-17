import React, { ReactNode } from "react";
import ColorsContext from "../ColorsContext";

export interface IContextProps {
  children: ReactNode;
}

const ContextProvider = ({ children }: IContextProps) => {
  return <ColorsContext>{children}</ColorsContext>;
};

export default ContextProvider;
