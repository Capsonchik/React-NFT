import { Routes, Route } from "react-router-dom";
import MainPage from './components/MainPage/MainPage'

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />   
        </Routes>
        {/* <MainPage/> */}
    </div>
  );
}

export default App;
