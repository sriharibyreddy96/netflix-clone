import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import Pricing from './Pages/Pricing/Pricing';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/pricing' element={<Pricing />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
