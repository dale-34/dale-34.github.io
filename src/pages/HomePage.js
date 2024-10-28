import {BrowserRouter as Router, Routes, Route, useNavigate  } from "react-router-dom";
import { useContext } from 'react';
import { TabContext } from '../App.js';
import profile from '../assets/images/profile.jpeg';
import "../App.css";

function HomePage() {
  const { selectedTab, setSelectedTab } = useContext(TabContext);
  const navigate = useNavigate();

  const handleClick = (tab, path) => {
    setSelectedTab(tab);
    navigate(path);
  };

  return (
    <div>
      <div className="home-container">
        <div className="card">
          <img src={profile} alt="Profile" />
          <h2>Dalena Nguyen</h2>
          <h3>Computer Science</h3>
          <h4 style={{ fontWeight: "normal" }}>Gainesville, FL</h4>
        </div>
        <div className="tab-container">
          <div
            onClick={() => handleClick("About", "/home")}
            style={{
              fontWeight: selectedTab === "About" ? "bold" : "normal",
              textDecorationLine:
                selectedTab === "About" ? "underline" : "normal",
            }}>
            About
          </div>
          <div
            onClick={() => handleClick("Projects", "/projects")}
            style={{
              fontWeight: selectedTab === "Projects" ? "bold" : "normal",
              textDecorationLine:
                selectedTab === "Projects" ? "underline" : "normal",
            }}>
            Projects
          </div>
          <div
            onClick={() => handleClick("Games", "/games")}
            style={{
              fontWeight: selectedTab === "Games" ? "bold" : "normal",
              textDecorationLine:
                selectedTab === "Games" ? "underline" : "normal",
            }}>
            Games
          </div>
          <div
            onClick={() => handleClick("Contact", "/contact")}
            style={{
              fontWeight: selectedTab === "Contact" ? "bold" : "normal",
              textDecorationLine:
                selectedTab === "Contact" ? "underline" : "normal",
            }}>
            Contact
          </div>
        </div>
        <div className="info-container">
          <h2>About Me</h2>
          <p>
            I am student studying Computer Science with a minor in Digital Arts
            and Sciences at the University of Florida. My interests include
            Software Engineering, Full Stack Development, and the intersection
            between digital media and programming. Outside of my career I enjoy
            playing tennis, reading, video games, art, and picking up niche
            hobbies!
          </p>
          <h2>Documents</h2>
          <a href="https://github.com/dale-34/PersonalWebsite/blob/main/Resume.pdf">
            Resume
          </a>
          <p
            style={{
              fontStyle: "italic",
              color: "CaptionText",
              marginTop: "0",
            }}
          >
            Last Updated: 9/18/2024
          </p>
          <h2 style={{ paddingBottom: "20px" }}>Experience</h2>
          <h3>United States Air Force Civilian Services</h3>
          <h4>
            Full Stack Developer Intern (T.S Clearance) | May 2024 - August 2024
          </h4>
          <p>
            I assisted in developing microservice-based solutions for serial
            RS-232/422/485 protocols, leveraging Docker for containerization and
            Kubernetes for seamless deployment management. My contribution
            allowed for automated, scalable testing frameworks for identifying
            vulnerabilities and potential exploits in embedded weapon systems.
            During my internship I shadowed full-time Software
            Engineers/Developers following Agile practices.
          </p>
          <h2 style={{ paddingBottom: "20px" }}>Extracurriculars</h2>
          <h3>Society of Women Engineers (SWE)</h3>
          <h4>
            August 2023 - Present
          </h4>
          <p>
            As one of the team leads on a STEAM project, my team and I developed
            an interactive exhibit using Arduino Nano technology. The exhibit
            featured an educational display of the ocean's layers, enhanced with
            interactive elements like motors and sensor-activated LED lights.
            Showcased at the CADE Museum for Creativity and Innovation in
            Gainesville, the exhibit attracted over 200 visitors.
          </p>
          <h3>Women in Computer Science Club (WiCSE)</h3>
          <h4>
            August 2022 - Present
          </h4>
          <p>
            As an active member of WiCSE I am advently involved with the events,
            workshops, and opportunities that WiCSE offers. As part of a
            Hack-a-Thon that WiCSE offered, my group developed a website that
            teaches beginners how to play chess to promote and encourage new
            incomers to chess.
          </p>
          <h2>Education</h2>
          <h3>University of Florida</h3>
          <h4>August 2022 - May 2025</h4>
          <p>Studying for Computer Science B.S Degree w/ Minor in Digital Arts and Sciences while completing
            Artificial Intelligence Certificate.
          </p>
          <h3>St. Petersburg College</h3>
          <h4>August 2021 - May 2022</h4>
          <p>Completed Associates of Arts Degree within Early College Program (Dual Enrollment).</p>
          <h3>Tarpon Springs High School</h3>
          <h4>August 2018 - May 2022</h4>
          <p>Cambridge Diploma with Merit. </p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
