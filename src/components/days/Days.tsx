import { ChangeEvent } from 'react';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../store/store';

import classes from './Days.module.scss';
import {
  setFriday,
  setMonday,
  setSaturday,
  setSunday,
  setThursday,
  setTuesday,
  setWednesday,
} from '../../store/slices/DaysSlice';
import {
  setIsHomeIconActive,
  setIsScheduleIconActive,
} from '../../store/slices/IsActiveSlice';

type Props = {};

const Days = (props: Props) => {
  const dispatch = useDispatch();

  if (window.location.pathname.includes('schedule')) {
    dispatch(setIsHomeIconActive(false));
    dispatch(setIsScheduleIconActive(true));
  }

  const changeGroupHandler = (e: ChangeEvent<HTMLInputElement>, i: number) => {
    switch (i) {
      case 0:
        localStorage.setItem('monday group', e.target.value);
        dispatch(setMonday(localStorage.getItem('monday group') || ''));
        break;
      case 1:
        localStorage.setItem('tuesday group', e.target.value);
        dispatch(setTuesday(localStorage.getItem('tuesday group') || ''));
        break;
      case 2:
        localStorage.setItem('wednesday group', e.target.value);
        dispatch(setWednesday(localStorage.getItem('wednesday group') || ''));
        break;
      case 3:
        localStorage.setItem('thursday group', e.target.value);
        dispatch(setThursday(localStorage.getItem('thursday group') || ''));
        break;
      case 4:
        localStorage.setItem('friday group', e.target.value);
        dispatch(setFriday(localStorage.getItem('friday group') || ''));
        break;
      case 5:
        localStorage.setItem('saturday group', e.target.value);
        dispatch(setSaturday(localStorage.getItem('saturday group') || ''));
        break;
      case 6:
        localStorage.setItem('sunday group', e.target.value);
        dispatch(setSunday(localStorage.getItem('sunday group') || ''));
        break;
      default:
        dispatch(setSunday(localStorage.getItem('monday group') || ''));
        break;
    }
  };

  const { monday, tuesday, wednesday, thursday, friday, saturday, sunday } =
    useSelector((state: RootState) => state.days);

  const days: { day: string; muscleGroup: string }[] = [
    { day: 'Monday', muscleGroup: monday }, //0
    { day: 'Tuesday', muscleGroup: tuesday }, //1
    { day: 'Wednesday', muscleGroup: wednesday }, //2
    { day: 'Thursday', muscleGroup: thursday }, //3
    { day: 'Friday', muscleGroup: friday }, //4
    { day: 'Saturday', muscleGroup: saturday }, //5
    { day: 'Sunday', muscleGroup: sunday }, //6
  ];

  return (
    <ul className={classes.scheduleDays}>
      {days.map((day: { day: string; muscleGroup: string }, i: number) => (
        <li className={classes.day} key={day.day}>
          <Link to={`/training/${i}`} className={classes.dayLink}>
            <h3 className={classes.dayTitle}>{day.day}</h3>
          </Link>
          <input
            className={classes.dayMuscleGroup}
            value={day.muscleGroup}
            placeholder='Name this day...'
            onChange={(e) => changeGroupHandler(e, i)}
          />
        </li>
      ))}
    </ul>
  );
};

export default Days;
