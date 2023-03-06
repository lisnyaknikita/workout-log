import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HomeInfo from '../components/home-info/HomeInfo';

import InputName from '../components/input-name/InputName';
import Modal from '../ui/modal/Modal';

import { setIsModal } from '../store/slices/ModalSlice';
import { RootState } from '../store/store';
import EnterNameForm from '../components/enter-name-form/EnterNameForm';

const HomePage: React.FC = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');

  const isModal = useSelector((state: RootState) => state.modal.isModal);

  const nameValue = localStorage.getItem('name');
  !nameValue && dispatch(setIsModal(true));

  if (isModal === true) {
    return (
      <Modal>
        <EnterNameForm name={name} setName={setName} />
      </Modal>
    );
  }

  return (
    <>
      <InputName />
      <HomeInfo />
    </>
  );
};

export default HomePage;
