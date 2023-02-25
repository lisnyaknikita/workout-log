import React, { ChangeEvent, useState } from 'react';

import classes from './InputName.module.scss';

type Props = {};

const InputName = (props: Props) => {
  const [name, setName] = useState('Your name');

  const nameChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.trim().length < 0)
      return alert('Please enter your name');
    setName(e.target.value);
  };

  return (
    <div className={classes.greeting}>
      <h1>Hello, </h1>
      <input
        className={classes.input}
        type='text'
        // defaultValue={'Your name'}
        value={name}
        onChange={nameChangeHandler}
      />
    </div>
  );
};

export default InputName;
