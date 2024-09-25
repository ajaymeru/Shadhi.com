import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Common/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Signup from './Common/Signup/Signup';
import Login from './Common/Signup/Login';
import Contactus from './Pages/ConatctUS/Contactus';
import Footer from './Common/Footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='login' element={<Login />} />
          <Route path='/contact' element={<Contactus />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
