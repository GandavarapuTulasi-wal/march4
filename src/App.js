import logo from './logo.svg';
import './App.css';
import Home from './Home';
import { Routes, BrowserRouter, Route, Link } from 'react-router-dom'
import Employees from './Employees'
import Contact from './Contact'
import About from './About'

 
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="container">
          <div>
            <h1 className="heading">Car Rental app</h1>
          </div>
          <div className="nav">
            <Link to='/' className="link">Home</Link>
            <Link to='/about' className="link">About</Link>
            <Link to="/contact" className="link">Contact</Link>
            <Link to="/employees" className="link">Employees</Link>
            
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/employees" element={<Employees />}></Route>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
