import { IReducerAction } from 'interfaces/reducer';
import { ADD_EXERCISE_COLOR, SET_CURRENT_COLOR } from './actionTypes';
import { IReducerState } from './types';

const colorsReducer = (
  state: IReducerState,
  action: IReducerAction
): IReducerState => {
  const { type, payload } = action;

  switch (type) {
    case ADD_EXERCISE_COLOR:
      return {
        ...state,
        exerciseColors: [...state.exerciseColors, payload.exerciseColor],
      };
    case SET_CURRENT_COLOR:
      return {
        ...state,
        currentColor: payload.currentColor,
      };
    default:
      return state;
  }
};

export default colorsReducer;
