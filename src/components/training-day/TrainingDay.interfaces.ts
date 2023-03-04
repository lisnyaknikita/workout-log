export interface IExercise {
  id: number;
  exercise: string;
  reps: number;
  sets: number;
}

export interface ITrainingDay {
  id: number;
  day: string;
  exercises: IExercise[];
}
