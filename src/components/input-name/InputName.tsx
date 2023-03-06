import React from 'react';

import classes from './InputName.module.scss';

const InputName: React.FC = () => {
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
