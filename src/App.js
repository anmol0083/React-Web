import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>
    <Header/>
    <Routes>
        <Route path="/" element ={<Home/>} /> 
        <Route path="about" element ={<About/>} /> 
        <Route path="contacts" element ={<Contact/>} /> 
      </Routes>
      
    </div>
  );
}

export default App;
