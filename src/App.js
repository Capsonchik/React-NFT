import { Outlet } from "react-router-dom";
import Footer from "./components/MainPage/Footer/Footer";
import Header from "./components/MainPage/header/Header";
import {useRef} from 'react'


// ШАБЛОН СТРАНИЦЫ ,kf ,kf ,kf

function App() {
//   const modalRef = useRef() 

//   const closeModal = e => {
//     console.log(modalRef.current)
//     if(modalRef.current === e.target) {
//         setShowModal(false)
//     }
// }
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  
  );
}

export default App;
