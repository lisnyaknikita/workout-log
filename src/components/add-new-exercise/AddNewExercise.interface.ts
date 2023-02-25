import { MutableRefObject } from "react";

export interface INewExercise {
  id: number
  exercise: string;
  reps: number;
  sets: number;
}

export interface IAddNewExercise {
  exercises: INewExercise[];
  // setExercises: () => void;
  setExercises: any;
  onAddNewExercise: (newExercise: INewExercise) => void;
  setIsModal: (status: boolean) => void;
}
