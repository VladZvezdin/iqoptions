import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Main from './containers/intro/main';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './containers/login/login';
import Register from './containers/register/register';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main teg='/'/>} />
      <Route path="/login" element={<Login teg="login"/>}/>
      <Route path='/register' element={<Register teg="register"/>}/>
    </Routes>
    
    </BrowserRouter>
  </React.StrictMode>
);
console.log(root)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
