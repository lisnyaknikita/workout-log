import { IExercise } from '../components/training-day/TrainingDay.interfaces';
import { RootState } from '../store/store';
import { useSelector } from 'react-redux';

export const useGetIdDay = (): IExercise[] => {
  const {
    mondayExercises,
    tuesdayExercises,
    wednesdayExercises,
    thursdayExercises,
    fridayExercises,
    saturdayExercises,
    sundayExercises,
  } = useSelector((state: RootState) => state.training);

  const pathName = window.location.pathname;
  const lastSymbol = pathName.length - 1;
  let exerciseThisDay: IExercise[] = [
    { id: 0, exercise: 'Default push-ups', reps: 12, sets: 3 },
  ];
  const idDay = +pathName[lastSymbol];

  idDay === 0
    ? (exerciseThisDay = mondayExercises)
    : idDay === 1
    ? (exerciseThisDay = tuesdayExercises)
    : idDay === 2
    ? (exerciseThisDay = wednesdayExercises)
    : idDay === 3
    ? (exerciseThisDay = thursdayExercises)
    : idDay === 4
    ? (exerciseThisDay = fridayExercises)
    : idDay === 5
    ? (exerciseThisDay = saturdayExercises)
    : idDay === 6
    ? (exerciseThisDay = sundayExercises)
    : (exerciseThisDay = mondayExercises);
  return exerciseThisDay;
};
