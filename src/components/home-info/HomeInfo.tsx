import { Link } from 'react-router-dom';

import HomeInfoImg from '../../assets/images/homeInfo-img.png';

import { useDispatch } from 'react-redux';
import {
  setIsHomeIconActive,
  setIsScheduleIconActive,
} from '../../store/slices/IsActiveSlice';

import classes from './HomeInfo.module.scss';

type Props = {};

const HomeInfo = (props: Props) => {
  const dispatch = useDispatch();

  const isActiveHandler = () => {
    dispatch(setIsHomeIconActive(false));
    dispatch(setIsScheduleIconActive(true));
  };

  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const today = new Date();
  const dayOfWeek = daysOfWeek[today.getDay()];
  const dayOfWeekIndex = today.getDay();

  return (
    <div className={classes.homeInfo}>
      <div>
        <img src={HomeInfoImg} alt='image' />
      </div>
      <div className={classes.homeInfoContent}>
        <h2 className={classes.homeInfoTitle}>
          Today is{' '}
          <Link to={`/training/${dayOfWeekIndex - 1}`}>{dayOfWeek}</Link>, great
          day for the gym!
        </h2>
        <Link
          to={'/schedule'}
          className={classes.homeInfoBtn}
          onClick={isActiveHandler}
        >
          View scheduled workout
        </Link>
      </div>
    </div>
  );
};

export default HomeInfo;
