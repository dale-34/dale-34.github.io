import {BrowserRouter as Router, Routes, Route, useNavigate  } from "react-router-dom";
import { useContext } from 'react';
import { TabContext } from '../App.js';
import profile from '../assets/images/profile.jpeg';
import "../App.css";

function Project() {
  const {selectedTab, setSelectedTab} = useContext(TabContext);
  const navigate = useNavigate();

  const handleClick = (tab, path) => {
    setSelectedTab(tab);
    navigate(path);
  };

  return (
    <div>
      <div className="home-container">
        <div className="card">
            <img src={profile} alt="Profile"/>
            <h2>Dalena Nguyen</h2>
            <h3>Computer Science</h3>
            <h4 style={{fontWeight: "normal"}}>Gainesville, FL</h4>
          </div>
        <div className="tab-container">
          <div 
            onClick={() => handleClick("About", "/home")} 
            style={{ fontWeight: selectedTab === "About" ? "bold" : "normal",
              textDecorationLine: selectedTab === "About" ? "underline" : "normal"
            }}>
            About
          </div>
          <div 
            onClick={() => handleClick("Projects", "/projects")} 
            style={{ fontWeight: selectedTab === "Projects" ? "bold" : "normal", 
              textDecorationLine: selectedTab === "Projects" ? "underline" : "normal"
            }}>
            Projects
          </div>
          <div 
            onClick={() => handleClick("Games", "/games")} 
            style={{ fontWeight: selectedTab === "Games" ? "bold" : "normal", 
              textDecorationLine: selectedTab === "Games" ? "underline" : "normal"
            }}>
            Games
          </div>
          <div 
            onClick={() => handleClick("Contact", "/contact")} 
            style={{ fontWeight: selectedTab === "Contact" ? "bold" : "normal",
              textDecorationLine: selectedTab === "Contact" ? "underline" : "normal"
              }}>
            Contact
          </div>
        </div>
        <div className="info-container">
          <p>Updating Soon!</p>
        </div>
      </div>
    </div>
  );
}

export default Project;
