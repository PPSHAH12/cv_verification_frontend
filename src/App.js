import logo from './logo.svg';
import './App.css';
import LoginPage from './Pages/LoginPage/LoginPage';
import HeadingPage from './Pages/HeadingPage/HeadingPage'
import {Route,
  BrowserRouter as Router,
  Routes, Link} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {BACKEND_URL as url} from "./Assets/FullForm";
import { isAuthenticated } from './services/Auth_service';

function App() {
  const [user, setUser] = useState(null);
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route exact path="/" element={user? <Link to="/headingPage"/>:<LoginPage/>}/>
        <Route exact path="/headingPage" element={<HeadingPage/>}/>
        </Routes>
        
      </Router>
      {/* <LoginPage/> */}
    </div>
  );
}

export default App;
