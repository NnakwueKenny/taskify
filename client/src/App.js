import './App.css';
import React, {useState, useEffect} from 'react';
import {Route, Routes, Link} from 'react-router-dom';
import IntroCarousel from './views/IntroCarousel';
import LetsIn from './views/LetsIn';
import SignUp from './views/SignUp';
import SignIn from './views/SignIn';
import FillProfile from './views/FillProfile';
import ForgotPassword from './views/ForgotPassword';
import ForgotPasswordOTP from './views/ForgotPasswordOTP';
import CreatePassword from './views/CreatePassword';
import Home from './views/Home';
import RecentProjects from './views/RecentProjects';
import TodayTask from './views/TodayTask';
import Notifications from './views/Notifications';
import Search from './views/Search';

const App = () => {
  // const userBrowserData = localStorage.getItem('taskManagerUserData');
  // console.log(userBrowserData);
  
  return (
    <div className=''>
      { /*  Nkewa nke okpokopi bidoro ebea    */ }
      <main className={`relative flex justify-center w-full h-screen shadow overflow-auto text-gray-600 dark:text-gray-400 dark:bg-gray-900`}>
        {/*overflow-auto scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-blue-300*/}
        <Routes>
          {/* Intro Section */}
          <Route path='/intro' element={<IntroCarousel />}/>
          <Route path='/lets-in' element={<LetsIn />}/>
          <Route path='/sign-up' element={<SignUp />}/>
          <Route path='/sign-in' element={<SignIn />}/>
          <Route path='/fill-profile' element={<FillProfile />}/>
          <Route path='/forgot-password' element={<ForgotPassword />}/>
          <Route path='/forgot-password-OTP' element={<ForgotPasswordOTP />}/>
          <Route path='/create-password' element={<CreatePassword />}/>

          {/* Main Section */}
          <Route path='/' element={<Home />}/>
          <Route path='/recent-projects' element={<RecentProjects />}/>
          <Route path='/today-task' element={<TodayTask />}/>
          <Route path='/notifications' element={<Notifications />}/>
          <Route path='/search' element={<Search />}/>
        </Routes>
      </main>
      { /*  Nkewa nke okpokopi kwusiri ebea   */ }
    </div>
  );
}

export default App;