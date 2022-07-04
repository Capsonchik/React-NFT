import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Routes, Route} from "react-router-dom";
import {BrowserRouter} from "react-router-dom";
import MainPage from './components/MainPage/MainPage';
import Signin from './components/Signin/Signin';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={< App />}>
          {/*Это будет шаблонная страничка с хедером и футером */}
          <Route path='/' element={< MainPage />}/>
          <Route path='/signin' element={< Signin />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function to
// log results (for example: reportWebVitals(console.log)) or send to an
// analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
