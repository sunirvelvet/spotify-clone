import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import './App.css';


function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={ <LoginForm />} />
        <Route path="/signup" component={<SignupForm />} />
      </Routes>
  );
}


export default App;
