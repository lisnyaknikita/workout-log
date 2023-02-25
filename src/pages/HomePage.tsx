import React, { useState } from 'react';
import HomeInfo from '../components/home-info/HomeInfo';

import InputName from '../components/input-name/InputName';

type Props = {};

const HomePage = (props: Props) => {

  return (
    <>
      <InputName/>
      <HomeInfo/>
    </>
  );
};

export default HomePage;
