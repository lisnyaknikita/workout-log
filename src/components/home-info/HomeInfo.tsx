import React from 'react'
import { Link } from 'react-router-dom'

import HomeInfoImg from '../../assets/images/homeInfo-img.png'

import classes from './HomeInfo.module.scss'

type Props = {}

const HomeInfo = (props: Props) => {
  return (
    <div className={classes.homeInfo}>
        <div>
            <img src={HomeInfoImg} alt="image" />
        </div>
        <div className={classes.homeInfoContent}>
            <h2 className={classes.homeInfoTitle}>Today is <span>Monday</span>, great day for the gym!</h2>
            <Link to={'/schedule'} className={classes.homeInfoBtn}>
            View scheduled workout
            </Link>
        </div>
    </div>
  )
}

export default HomeInfo