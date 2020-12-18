import React from "react";
import ColorsContext from "../ColorsContext";
import { IContextProps } from "./IContextProps";

export const ContextProvider = ({ children }: IContextProps) => {
  return <ColorsContext>{children}</ColorsContext>;
};

export default ContextProvider;
