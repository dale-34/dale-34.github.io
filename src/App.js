import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { createContext, useState, useEffect} from 'react';
import flower1 from './assets/images/flower1.png';
import flower2 from './assets/images/flower2.png';
import HomePage from './pages/HomePage';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Games from './pages/Games';
import './pages/HomePage';
import './App.css';

export const TabContext = createContext();
export const TabProvider = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState(() => {
    return localStorage.getItem('selectedTab') || 'About';
  });
  
  useEffect(() => {
    localStorage.setItem('selectedTab', selectedTab);
  }, [selectedTab]);

  return (
    <TabContext.Provider value={{ selectedTab, setSelectedTab }}>
      {children}
    </TabContext.Provider>
  );
};

function App() {
  const navigate = useNavigate();
  return (
    <div className="app-container">
      <div className="content">
        <h1>Welcome</h1>
        <div className='button-container'>
          <button className='button' onClick={() => navigate("/home")}>continue</button>
        </div>
      </div>
      <div class="background-image">
        <div><img src={flower1} alt="Flower Decor 1"/> </div>
        <div><img src={flower2} alt="Flower Decor 2"/> </div>
      </div>
    </div>
  );
}

export default function MainApp() {
  return (
    <TabProvider>
      <Router>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/games" element={<Games />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
    </TabProvider>
  );
}
