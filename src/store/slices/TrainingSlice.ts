import { createSlice } from '@reduxjs/toolkit';
import { IExercise } from '../../components/training-day/TrainingDay.interfaces';

export interface ITrainingState {
  mondayExercises: IExercise[];
  tuesdayExercises: IExercise[];
  wednesdayExercises: IExercise[];
  thursdayExercises: IExercise[];
  fridayExercises: IExercise[];
  saturdayExercises: IExercise[];
  sundayExercises: IExercise[];
}

const initialState: ITrainingState = {
  mondayExercises: [{ id: 0, exercise: 'Default push-ups', reps: 12, sets: 3 }],
  tuesdayExercises: [
    { id: 0, exercise: 'Hannibal push-ups', reps: 10, sets: 3 },
  ],
  wednesdayExercises: [
    { id: 0, exercise: 'Default pull-ups', reps: 8, sets: 3 },
  ],
  thursdayExercises: [{ id: 0, exercise: 'Bicep climbs', reps: 12, sets: 3 }],
  fridayExercises: [{ id: 0, exercise: 'Squads', reps: 15, sets: 3 }],
  saturdayExercises: [{ id: 0, exercise: 'Breeding', reps: 9, sets: 3 }],
  sundayExercises: [{ id: 0, exercise: 'Press twists', reps: 25, sets: 3 }],
};

export const TrainingSlice = createSlice({
  name: 'training',
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = TrainingSlice.actions;

export default TrainingSlice.reducer;
