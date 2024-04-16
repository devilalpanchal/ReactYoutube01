import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import User from './User';
import Return from './Return';
import Class from './Class';
import Jsx from './Jsx'
import Withoutksx from './Withoutjsx'
import reportWebVitals from './reportWebVitals';
import Bpp from './ClickEvent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <User/>
    <App />
    <Return />
    <Class />
    <Jsx/>
    <Withoutksx/>
    <Bpp/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
