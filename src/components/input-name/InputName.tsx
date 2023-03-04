import React, { ChangeEvent, useState } from 'react';

import classes from './InputName.module.scss';

type Props = {};

const InputName = (props: Props) => {
  const [name, setName] = useState('Your name');

  return (
    <div className={classes.greeting}>
      <h1>Hello, </h1>
      <input
        className={classes.input}
        type='text'
        defaultValue={localStorage.getItem('name') || ''}
        readOnly
      />
    </div>
  );
};

export default InputName;
