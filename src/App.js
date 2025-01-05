import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { AppProvider } from './context/AppContext';
import Navigation from './components/layout/Navigation';
import Header from './components/layout/Header';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
// import Skills from './pages/Skills';
import Games from './pages/Games';
// import LoadingSpinner from './components/common/LoadingSpinner';
// import ErrorMessage from './components/common/ErrorMessage';
// import { useAppContext } from './context/AppContext';
// import { DataProvider } from './context/DataContext';

const AppContent = () => {
  return (
    <div className="flex flex-col min-h-screen pt-10">
      <Header />
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects/*" element={<Projects />} />
          <Route path="/games" element={<Games />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/assets/*" />
          {/* <Route path="/skills" element={<Skills />} /> */}
        </Routes>
      </main>
    </div>
  );
};

function App() {
  return (
    // <AppProvider>
    //   <DataProvider>
        <Router>
          <AppContent />
        </Router>
    //   </DataProvider>
    // </AppProvider>
  );
}

export default App;