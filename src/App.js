import './App.css';
import {BrowserRouter as Router , Route,Routes,Redirect} from "react-router-dom";
import TechCrunch from './pages/TechCrunch';
import Tesla from './pages/Tesla';
import Business from "./pages/Business";
import Apple from "./pages/Apple";
import Home from './pages/Home';
// import AllNews from "./pages/Apple";
import Navbar from './components/Navbar';
// import { useEffect } from 'react';
function App() {
  return (
    <>
    <Router>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/tech' element={<TechCrunch />}/>
        <Route path='/tesla' element={<Tesla />}/>
        <Route path='/allnews' element={<Apple />}/>
        <Route path='/business' element={<Business />}/>
        {/* <Route path='/allnews' element={<AllNews />}/> */}
      </Routes>
    </Router>
    </>
  );
}

export default App;
