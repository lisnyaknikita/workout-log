import axios from 'axios';
import clsx from 'clsx';
import React, { Dispatch, SetStateAction } from 'react';

import { AiOutlineDelete } from 'react-icons/ai';

import { useGetPathId } from '../../utils/useGetPathId';

import {
  IExercise,
  ITrainingDay,
} from '../training-day/TrainingDay.interfaces';

import classes from './TrainingDayTable.module.scss';

interface ITrainingDayTableProps {
  exercises: IExercise[];
  setExercises: Dispatch<
    SetStateAction<
      { id: number; exercise: string; reps: number; sets: number }[]
    >
  >;
}

const TrainingDayTable: React.FC<ITrainingDayTableProps> = ({
  exercises,
  setExercises,
}) => {
  const pathId = useGetPathId();
  //TODO: перенести запросы на сервер на ртк
  const changeRepsHandler = async (
    e: React.ChangeEvent<HTMLInputElement>,
    i: number,
    pathId: number | string
  ) => {
    const exerciseIndex = exercises.findIndex(
      (exercise) => exercise.id === i + 1
    );
    const newExercises = [...exercises];
    newExercises[exerciseIndex] = {
      ...newExercises[exerciseIndex],
      reps: +e.target.value,
    };
    setExercises(newExercises);
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
    await axios.put<ITrainingDay>(`http://localhost:3001/trainings/${pathId}`, {
      id: pathId,
      day: day,
      exercises: newExercises,
    });
  };

  const changeSetsHandler = async (
    e: React.ChangeEvent<HTMLInputElement>,
    i: number
  ) => {
    const exerciseIndex = exercises.findIndex(
      (exercise) => exercise.id === i + 1
    );
    const newExercises = [...exercises];
    newExercises[exerciseIndex] = {
      ...newExercises[exerciseIndex],
      sets: +e.target.value,
    };
    setExercises(newExercises);
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
    await axios.put<ITrainingDay>(`http://localhost:3001/trainings/${pathId}`, {
      id: pathId,
      day: day,
      exercises: newExercises,
    });
  };

  const deleteHandler = async (i: number) => {
    const newExercises = exercises.filter((exercise) => exercise.id !== i + 1);
    setExercises(newExercises);
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
    await axios.put(`http://localhost:3001/trainings/${pathId}`, {
      id: pathId,
      day: day,
      exercises: newExercises,
    });
  };

  return (
    <table className={classes.table}>
      <tbody>
        {exercises.length > 0 ? (
          exercises.map((exercise, i) => (
            <tr key={exercise.exercise} className={clsx(i >= 6 && 'overflow')}>
              <td className={classes.thExercise}>{exercise.exercise}</td>
              <td className={classes.thReps}>
                {' '}
                <input
                  type='number'
                  style={{ background: 'transparent' }}
                  value={exercise.reps}
                  onChange={(e) => changeRepsHandler(e, i, pathId)}
                />{' '}
                reps
              </td>
              <td className={classes.thSets}>
                {' '}
                <input
                  type='number'
                  style={{ background: 'transparent' }}
                  value={exercise.sets}
                  onChange={(e) => changeSetsHandler(e, i)}
                />{' '}
                sets
              </td>
              <td>
                <button
                  className={classes.deleteBtn}
                  onClick={() => deleteHandler(i)}
                >
                  <AiOutlineDelete />
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr style={{ display: 'flex', justifyContent: 'center' }}>
            <td>
              <h2>There is no exercises</h2>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default TrainingDayTable;
