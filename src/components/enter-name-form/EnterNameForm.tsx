import React, { Dispatch, SetStateAction } from 'react';

import { useDispatch } from 'react-redux';
import { setIsModal } from '../../store/slices/ModalSlice';

import classes from './EnterNameForm.module.scss';

interface IEnterNameFormProps {
  name: string;
  setName: Dispatch<SetStateAction<string>>;
}

const EnterNameForm: React.FC<IEnterNameFormProps> = ({ name, setName }) => {
  const dispatch = useDispatch();

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim().length < 0) {
      return alert('Enter the exercise...');
    }
    localStorage.setItem('name', name);
    dispatch(setIsModal(false));
  };

  return (
    <form action='submit' onSubmit={onSubmitHandler}>
      <h2 className={classes.title}>Enter your name..</h2>
      <input
        className={classes.inputName}
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type='submit' className={classes.button}>
        Confirm
      </button>
    </form>
  );
};

export default EnterNameForm;
