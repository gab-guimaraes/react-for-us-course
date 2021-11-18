import logo from './logo.svg';
import './App.css';

import { 
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';

//My Components
import Header from './components/Header';
import HomeGuest from './components/HomeGuest';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Terms from './components/Terms';
import React, {useState} from 'react';

function App() {
  const[loggedIn, setLoggedIn] = useState(Boolean(localStorage.getItem("complexappToken"))); 

  return (
   <BrowserRouter>
     <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
     <Routes>
       <Route path="/" element={
         loggedIn ? <Home /> : <HomeGuest/>
       } />
       <Route path="/about" element={<About/>} />
       <Route path="/terms" element={<Terms/>} />
      </Routes>
     <Footer />
  </BrowserRouter>
  );
}

export default App;
  