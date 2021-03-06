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
import { CollectionProduct } from './components/ProfilePage/collectionProduct/collectionProduct';
import { NotFoundPage } from './pages/notFoundPage/notFoundPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='/' element={<MainPage />}>
            <Route path='/allitems' />
            <Route path='/art' />
            <Route path='/game'/>
            <Route path='/photography'/>
            <Route path='/music'/>
            <Route path='/video'/>
          </Route>
          <Route path='/signin' element={<Signin />}/>
          <Route path='/signup' element={<Signup />}/>
          <Route path='/profile' element={<ProfilePage />}/>
          <Route path='/profile' element={<ProfilePage />}>
            <Route path='/profile' element={<CollectionProduct />}/>
            <Route path='/profile/collectibles' element={<CollectionProduct />}/>
            <Route path='/profile/created' element={<CollectionProduct />}/>
            <Route path='/profile/following' element={<CollectionProduct />}/>
            <Route path='/profile/followers' element={<CollectionProduct />}/>
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function to
// log results (for example: reportWebVitals(console.log)) or send to an
// analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
