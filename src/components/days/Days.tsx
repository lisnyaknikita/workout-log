import React, { ChangeEvent, useState } from 'react';
import { Link } from 'react-router-dom';

import classes from './Days.module.scss';

type Props = {};

const Days = (props: Props) => {
  const [monday, setMonday] = useState('Chest');
  const [tuesday, setTuesday] = useState('Triceps');
  const [wednesday, setWednesday] = useState('Back');
  const [thursday, setThursday] = useState('Biceps');
  const [friday, setFriday] = useState('Legs');
  const [saturday, setSaturday] = useState('Shoulders');
  const [sunday, setSunday] = useState('Core');

  const days: any = [
    { day: 'Monday', muscleGroup: monday }, //0
    { day: 'Tuesday', muscleGroup: tuesday }, //1
    { day: 'Wednesday', muscleGroup: wednesday }, //2
    { day: 'Thursday', muscleGroup: thursday }, //3
    { day: 'Friday', muscleGroup: friday }, //4
    { day: 'Saturday', muscleGroup: saturday }, //5
    { day: 'Sunday', muscleGroup: sunday }, //6
  ];

  const changeGroupHandler = (e: ChangeEvent<HTMLInputElement>, i: number) => {
    i === 0
      ? setMonday(e.target.value)
      : i === 1
      ? setTuesday(e.target.value)
      : i === 2
      ? setWednesday(e.target.value)
      : i === 3
      ? setThursday(e.target.value)
      : i === 4
      ? setFriday(e.target.value)
      : i === 5
      ? setSaturday(e.target.value)
      : setSunday(e.target.value);
  };

  return (
    <ul className={classes.scheduleDays}>
      {days.map((day: any, i: number) => (
        <li className={classes.day} key={day.day}>
          <Link to={`/training/${i}`} className={classes.dayLink}>
            <h3 className={classes.dayTitle}>{day.day}</h3>
          </Link>
          <input
            className={classes.dayMuscleGroup}
            value={day.muscleGroup}
            onChange={(e) => changeGroupHandler(e, i)}
          />
        </li>
      ))}
    </ul>
  );
};

export default Days;
