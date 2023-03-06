import axios from 'axios';

import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import { AiOutlinePlus } from 'react-icons/ai';

import Modal from '../../ui/modal/Modal';

import AddNewExercise from '../add-new-exercise/AddNewExercise';
import { INewExercise } from '../add-new-exercise/AddNewExercise.interface';
import { IExercise, ITrainingDay } from './TrainingDay.interfaces';

import { useGetDay } from '../../utils/useGetDay';
import { useGetIdDay } from '../../utils/useGetIdDay';
import { useGetPathId } from '../../utils/useGetPathId';

import BackBtn from '../../assets/images/backBtn-icon.svg';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { setIsModal } from '../../store/slices/ModalSlice';

import classes from './TrainingDay.module.scss';
import {
  setIsHomeIconActive,
  setIsScheduleIconActive,
} from '../../store/slices/IsActiveSlice';
import TrainingDayTable from '../training-day-table/TrainingDayTable';

const TrainingDay: React.FC = () => {
  const dispatch = useDispatch();

  const isModal = useSelector((state: RootState) => state.modal.isModal);

  const [exercises, setExercises] = useState([
    { id: 0, exercise: 'Default push-ups', reps: 12, sets: 3 },
  ]);

  if (window.location.pathname.includes('training')) {
    dispatch(setIsHomeIconActive(false));
    dispatch(setIsScheduleIconActive(true));
  }

  const day = useGetDay();
  const exerciseThisDay: IExercise[] = useGetIdDay();
  const pathId = useGetPathId();

  const addExerciseHandler = () => {
    dispatch(setIsModal(true));
  };

  const onAddNewExercise = async (newExercise: INewExercise) => {
    const newExercisesList = [...exercises, newExercise];
    setExercises(newExercisesList);
    setIsModal(false);
    let day: string = '';
    pathId === 0
      ? (day = 'Monday')
      : pathId === 1
      ? (day = 'Tuesday')
      : pathId === 2
      ? (day = 'Wednesday')
      : pathId === 3
      ? (day = 'Thursday')
      : pathId === 4
      ? (day = 'Friday')
      : pathId === 5
      ? (day = 'Saturday')
      : pathId === 6
      ? (day = 'Sunday')
      : (day = '');
    await axios.put<IExercise>(`http://localhost:3001/trainings/${pathId}`, {
      id: pathId,
      day: day,
      exercises: newExercisesList,
    });
  };

  const fetchTraining = async (idDay: string) => {
    const response = await axios.get<ITrainingDay>(
      `http://localhost:3001/trainings/${idDay}`
    );
    setExercises(response.data.exercises);
  };

  useEffect(() => {
    const pathName = window.location.pathname;
    const lastSymbol = pathName.length - 1;
    const idDay = pathName[lastSymbol];
    fetchTraining(idDay);
  }, []);

  useEffect(() => {
    setExercises(exerciseThisDay);
  }, []);

  return (
    <div className={classes.training}>
      <Link to={'/schedule'} className={classes.backBtn}>
        <img src={BackBtn} alt='Back button' />
      </Link>
      <h2 className={classes.trainingTitle}>{day}</h2>
      <div className={classes.tableWrapper}>
        <TrainingDayTable exercises={exercises} setExercises={setExercises} />
      </div>
      {isModal ? (
        <Modal>
          <AddNewExercise
            exercises={exercises}
            setExercises={setExercises}
            onAddNewExercise={onAddNewExercise}
          />
        </Modal>
      ) : (
        <button className={classes.addBtn} onClick={addExerciseHandler}>
          <AiOutlinePlus />
          <span>Add exercise</span>
        </button>
      )}
    </div>
  );
};

export default TrainingDay;
