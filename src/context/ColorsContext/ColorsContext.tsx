import React, { createContext, ReactNode, useReducer } from 'react';
import colorsReducer, { initialState, IReducerState } from './colorsReducer';
import { IColorObj } from 'interfaces/IColorObj';
import { ColorClass } from '../../models/Color';
import {
  addExerciseColorAction,
  setCurrentColorAction,
} from './colorsReducer/actions';

// TODO: interfaces
interface IProps {
  children: ReactNode;
}

interface IContextState {
  addExerciseColor: (exerciseColor: IColorObj) => void;
  setCurrentColor: (currentColor: string) => void;
}

const initialContext: IContextState = {
  addExerciseColor: () => {},
  setCurrentColor: () => {},
};

type ColorsContextStateType = IContextState & IReducerState;

export const Context = createContext<ColorsContextStateType>({
  ...initialState,
  ...initialContext,
});

const ColorsContext = ({ children }: IProps) => {
  const [reducerState, dispatch] = useReducer(colorsReducer, initialState);

  const addExerciseColor = (exerciseColor: IColorObj) => {
    const newColor = new ColorClass(exerciseColor);
    dispatch(addExerciseColorAction(newColor));
  };

  const setCurrentColor = (currentColor: string) => {
    dispatch(setCurrentColorAction(currentColor));
  };

  const contextValue: ColorsContextStateType = {
    ...reducerState,
    addExerciseColor,
    setCurrentColor,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default ColorsContext;
