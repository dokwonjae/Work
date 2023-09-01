import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// 리액트 메뉴 라이브러리
import {BrowserRouter} from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  
  // 얘네들 때문에 결과 2번나옴
  // <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
