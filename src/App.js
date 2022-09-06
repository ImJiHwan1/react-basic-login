import React from 'react';
import './App.css';
import SignIn from './components/SignIn';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profile from './components/Profile';

function App() {
  const token = localStorage.getItem('accessToken');

  if(!token) {
    return <SignIn />
  }

  return (
    <div className='wrapper'>
      <BrowserRouter>
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
