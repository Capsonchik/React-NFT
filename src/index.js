import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Routes, Route} from "react-router-dom";
import {BrowserRouter} from "react-router-dom";
import MainPage from './components/MainPage/MainPage';
import Signin from './components/Signin/Signin';
import Signup from './components/Signup/Signup';
import { ProfilePage } from './components/ProfilePage/ProfilePage';
import { Component1 } from './components/ProfilePage/collectionProduct/Component1';
import { Component2 } from './components/ProfilePage/collectionProduct/Component2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='/' element={<MainPage />}>
            <Route path='/allitems' element={<Component2 />}/>
            <Route path='/art' element={<Component2 />}/>
            <Route path='/game' element={<Component2 />}/>
            <Route path='/photography' element={<Component2 />}/>
            <Route path='/music' element={<Component2 />}/>
            <Route path='/video' element={<Component2 />}/>
          </Route>
          <Route path='/signin' element={<Signin />}/>
          <Route path='/signup' element={<Signup />}/>
          <Route path='/profile' element={<ProfilePage />}/>
          <Route path='/profile' element={<ProfilePage />}>
            <Route path='/profile' element={<Component1 />}/>
            <Route path='/profile/collectibles' element={<Component2 />}/>
            <Route path='/profile/created' element={<Component2 />}/>
            <Route path='/profile/following' element={<Component2 />}/>
            <Route path='/profile/followers' element={<Component2 />}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function to
// log results (for example: reportWebVitals(console.log)) or send to an
// analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
