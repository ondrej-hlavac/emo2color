import { IColorObj } from 'interfaces/IColorObj';
import { IReducerAction } from '../../../interfaces/reducer';
import { ADD_EXERCISE_COLOR } from './actionTypes';

export const addExerciseColorAction = (exerciseColor: IColorObj): IReducerAction => ({
  type: ADD_EXERCISE_COLOR,
  payload: { exerciseColor },
}) 