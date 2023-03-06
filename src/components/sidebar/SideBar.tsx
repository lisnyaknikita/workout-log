import { Link } from 'react-router-dom';

import clsx from 'clsx';

import HomeIcon from '../../assets/images/home-icon.svg';
import ScheduleIcon from '../../assets/images/schedule-icon.svg';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import {
  setIsHomeIconActive,
  setIsScheduleIconActive,
} from '../../store/slices/IsActiveSlice';

import classes from './SideBar.module.scss';

const SideBar: React.FC = () => {
  const dispatch = useDispatch();

  const { isHomeIconActive, isScheduleIconActive } = useSelector(
    (state: RootState) => state.isActive
  );

  const onHomeClickHandler = () => {
    dispatch(setIsScheduleIconActive(false));
    dispatch(setIsHomeIconActive(true));
  };

  const onScheduleClickHandler = () => {
    dispatch(setIsHomeIconActive(false));
    dispatch(setIsScheduleIconActive(true));
  };

  return (
    <div className={classes.sideBar}>
      <Link
        to={'/'}
        className={clsx(`${classes.homeBtn}`, isHomeIconActive && 'active')}
        onClick={onHomeClickHandler}
      >
        <img src={HomeIcon} alt='Home icon' />
      </Link>
      <Link
        to={'/schedule'}
        className={clsx(
          `${classes.scheduleBtn}`,
          isScheduleIconActive && 'active'
        )}
        onClick={onScheduleClickHandler}
      >
        <img src={ScheduleIcon} alt='Schedule icon' />
      </Link>
    </div>
  );
};

export default SideBar;
