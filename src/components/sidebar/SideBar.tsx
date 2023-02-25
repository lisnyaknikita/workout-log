import React from 'react';

import { GrHomeRounded } from 'react-icons/gr';
import { GrSchedules } from 'react-icons/gr';
import { Link } from 'react-router-dom';

import classes from './SideBar.module.scss';

type Props = {};

const SideBar = (props: Props) => {
  return (
    <div className={classes.sideBar}>
      <Link to={'/'} className={classes.sideBarBtn}>
        <GrHomeRounded />
      </Link>
      <Link to={'/schedule'} className={classes.sideBarBtn}>
        <GrSchedules />
      </Link>
    </div>
  );
};

export default SideBar;
