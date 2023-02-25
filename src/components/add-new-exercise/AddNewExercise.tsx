import React, { useState } from 'react';

import { GrFormClose } from 'react-icons/gr';

import { IAddNewExercise } from './AddNewExercise.interface';

import classes from './AddNewExercise.module.scss';

const AddNewExercise: React.FC<IAddNewExercise> = ({
  exercises,
  setExercises,
  onAddNewExercise,
  setIsModal,
}) => {
  const [exerciseName, setExerciseName] = useState<string>('');
  const [numberOfReps, setNumberOfReps] = useState<number>(0);
  const [numberOfSets, setNumberOfSets] = useState<number>(0);

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (exerciseName.trim().length <= 0) {
      return alert('Enter the exercise');
    }
    const newExercise = {
      id: 3,
      exercise: exerciseName,
      reps: numberOfReps,
      sets: numberOfSets,
    };
    onAddNewExercise(newExercise);
  };

  return (
    <form className={classes.addForm} onSubmit={onSubmitHandler}>
      <div className={classes.inputs}>
        <input
          type='text'
          placeholder='Enter the exercise'
          className={classes.inputExercise}
          value={exerciseName}
          onChange={(e) => setExerciseName(e.target.value)}
        />
        <input
          type='number'
          placeholder='reps'
          className={classes.inputReps}
          value={numberOfReps}
          onChange={(e) => setNumberOfReps(+e.target.value)}
        />
        <input
          type='number'
          placeholder='sets'
          className={classes.inputSets}
          value={numberOfSets}
          onChange={(e) => setNumberOfSets(+e.target.value)}
        />
        <button type='submit' className={classes.addBtn}>
          Add exercise
        </button>
      </div>

      <button className={classes.closeBtn} onClick={() => setIsModal(false)}>
        <GrFormClose />
      </button>
    </form>
  );
};

export default AddNewExercise;
