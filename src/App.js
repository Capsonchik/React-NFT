import { Outlet } from "react-router-dom";
import Footer from "./components/MainPage/Footer/Footer";
import Header from "./components/MainPage/header/Header";

// ШАБЛОН СТРАНИЦЫ

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
