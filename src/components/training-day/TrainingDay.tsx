import clsx from 'clsx';
import React, { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineDelete } from 'react-icons/ai';

import Modal from '../../ui/modal/Modal';
import AddNewExercise from '../add-new-exercise/AddNewExercise';
import { INewExercise } from '../add-new-exercise/AddNewExercise.interface';

import classes from './TrainingDay.module.scss';

const TrainingDay: React.FC = () => {
  const [exercises, setExercises] = useState([
    { id: 1, exercise: 'Default push-ups', reps: 12, sets: 3 },
    { id: 2, exercise: 'Archer push-ups', reps: 10, sets: 3 },
  ]);
  const [isModal, setIsModal] = useState(false);

  const addExerciseHandler = () => {
    setIsModal(true);
  };

  const onAddNewExercise = (newExercise: INewExercise) => {
    const newExercisesList = [...exercises, newExercise];
    setExercises(newExercisesList);
    setIsModal(false);
  };

  const changeRepsHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    i: number
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
  };

  const changeSetsHandler = (
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
  };

  const deleteHandler = (i: number) => {
    const newExercises = exercises.filter((exercise) => exercise.id !== i + 1);
    setExercises(newExercises);
  };

  return (
    <div className={classes.training}>
      <h2 className={classes.trainingTitle}>Chest day</h2>
      <div className={classes.tableWrapper}>
        <table className={classes.table}>
          <tbody>
            {exercises.length > 0 ? (
              exercises.map((exercise, i) => (
                <tr
                  key={exercise.exercise}
                  className={clsx(i >= 6 && 'overflow')}
                >
                  <td className={classes.thExercise}>{exercise.exercise}</td>
                  <td className={classes.thReps}>
                    {' '}
                    <input
                      type='number'
                      style={{ background: 'transparent' }}
                      value={exercise.reps}
                      onChange={(e) => changeRepsHandler(e, i)}
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
      </div>
      {isModal ? (
        <Modal>
          <AddNewExercise
            exercises={exercises}
            setExercises={setExercises}
            onAddNewExercise={onAddNewExercise}
            setIsModal={setIsModal}
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
