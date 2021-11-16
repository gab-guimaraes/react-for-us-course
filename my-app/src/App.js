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
import About from './components/About';
import Terms from './components/Terms';

function App() {
  return (
   <BrowserRouter>
     <Header />
    
     <Routes>
       <Route path="/" element={<HomeGuest/>} />
       <Route path="/about" element={<About/>} />
       <Route path="/terms" element={<Terms/>} />
      </Routes>
     <Footer />
  </BrowserRouter>
  );
}

export default App;
  