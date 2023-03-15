import { Route, Routes } from 'react-router-dom';

import './assets/styles/global.scss';

import SideBar from './components/sidebar/SideBar';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import SchedulePage from './pages/SchedulePage';
import TrainingPage from './pages/TrainingPage';

function Workout() {
  return (
    <div
      className='workout'
      style={{ display: 'flex', width: '100vw', height: '100vh' }}
    >
      <SideBar />
      <div className='content'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/schedule' element={<SchedulePage />} />
          <Route path='/training/:id' element={<TrainingPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default Workout;
