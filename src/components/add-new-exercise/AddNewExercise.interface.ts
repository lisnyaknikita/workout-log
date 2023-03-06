import { Dispatch, SetStateAction } from 'react';

export interface INewExercise {
  id: number;
  exercise: string;
  reps: number;
  sets: number;
}

export interface IAddNewExercise {
  exercises: INewExercise[];
  setExercises: Dispatch<SetStateAction<INewExercise[]>>;
  onAddNewExercise: (newExercise: INewExercise, day: string) => void;
}
