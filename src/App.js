
import './App.css';
import HomePage from './Components/HomePage';
import LOGIN from './Components/Login'
import NavBar from "./Components/NavBar";
import './Css/style.css'
import {Routes,Route} from 'react-router'
import Home from "./Components/Home"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path="/login" element={<LOGIN  ></LOGIN>} />
        <Route path='/home' element={<HomePage></HomePage>} />
      </Routes>
    </div>
  );
}

export default App;
