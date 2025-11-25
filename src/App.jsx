import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Classes from './Pages/Classes';
import Admission from './Pages/Admission';
import Gallery from './Pages/Gallery';
import News from './Pages/News';
import Contacts from './Pages/Contacts';
import Nursery from './Pages/Nursery';
import Primary from './Pages/Primary';    

const App = () => {
  
  return ( 
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/academics" element={<Classes />} />
        <Route path="/admissions" element={<Admission />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/news" element={<News />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/nursery" element={<Nursery />} />
        <Route path="/primary" element={<Primary />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
