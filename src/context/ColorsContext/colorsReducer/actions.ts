import { IColorObj } from 'interfaces/IColorObj';
import { IReducerAction } from '../../../interfaces/reducer';
import { ADD_EXERCISE_COLOR, SET_CURRENT_COLOR } from './actionTypes';

export const addExerciseColorAction = (
  exerciseColor: IColorObj
): IReducerAction => ({
  type: ADD_EXERCISE_COLOR,
  payload: { exerciseColor },
});

export const setCurrentColorAction = (
  currentColor: string
): IReducerAction => ({
  type: SET_CURRENT_COLOR,
  payload: { currentColor },
});
