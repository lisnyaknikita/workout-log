import { Link, Route, Routes } from 'react-router-dom';

import './assets/styles/global.scss'

import SideBar from './components/sidebar/SideBar';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import SchedulePage from './pages/SchedulePage';
import TrainingPage from './pages/TrainingPage';

function Workout() {
    return (
        <div className="workout flex w-screen h-screen">
            <SideBar/>
            <div className="content w-full px-[65px] py-[85px]">
                <Routes>
                   <Route path='/' element={<HomePage/>} /> 
                   <Route path='/schedule' element={<SchedulePage/>} /> 
                   <Route path='/training/:id' element={<TrainingPage/>} /> 
                   <Route path='*' element={<NotFoundPage/>} /> 
                </Routes>
            </div>
        </div>
    );
}

export default Workout;
