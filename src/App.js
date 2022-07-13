import { Outlet } from "react-router-dom";
import Footer from "./components/MainPage/Footer/footer";
import Header from "./components/MainPage/header/Header";
import {useRef} from 'react'


// ШАБЛОН СТРАНИЦЫ ,kf ,kf ,kf

function App() {

  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  
  );
}

export default App;
