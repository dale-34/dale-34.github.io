import React, { useState, useEffect } from 'react';
import Skills from './Skills';
// import { Link } from 'react-router-dom';

const About = () => {
  const pdfFiles = [
    { name: 'Dalena_Nguyen_Transcript.pdf', label: 'Unofficial-Transcript', lastUpdated: '12-16-24', group: 'transcript', href: 'https://github.com/dale-34/PersonalWebsite/blob/main/Resume.pdf'},
    { name: 'Dalena_Nguyen_Resume.pdf', label: 'Resume', lastUpdated: '11-04-2024', group: 'other' },
  ];


  const renderPdfGroup = (group) => (
    <div className="flex flex-col">
      <h3 className="font-semibold mb-2">{group === 'transcript' ? 'Transcripts' : 'Resume'}</h3>
      {pdfFiles
        .filter(pdf => pdf.group === group)
        .map(pdf => {
          const staticUrl = `https://github.com/dale-34/dale-34.github.io/tree/gh-pages/assets/${pdf.name}`;
          return (
            <div key={pdf.name} className="mb-2">
              <a
                href={staticUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary"
              >
                {pdf.label}
              </a>
              <span className="text-xs text-gray-500">
                &#160; Last updated: {pdf.lastUpdated}
              </span>
            </div>
          );
        })}
    </div>
  );

  return (
    <div className="max-w-3xl mx-auto">
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p className="text-text-secondary mb-4">
            With a Bachelors of Science in Computer Science from the University of Florida, 
            my interests include Software Engineering, Full Stack Development, and the intersection
            between digital media and programming. Outside of my career I enjoy
            playing tennis, reading, video games, art, and picking up niche
            hobbies!
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Documents</h2>
        <div className="flex justify-between">
          {renderPdfGroup('transcript')}
          {renderPdfGroup('other')}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Experience</h2>
        <div className="mb-6">
          <h3 className="text-xl font-semibold">United States Air Force Civilian Services</h3>
          <h4 className="text-lg">Full Stack Developer Intern (T.S Clearance)</h4>
          <p className="text-sm text-text-secondary">May 2024 - August 2024</p>
          <p className="mt-2">
            I assisted in developing microservice-based solutions for serial
            RS-232/422/485 protocols, leveraging Docker for containerization and
            Kubernetes for seamless deployment management. My contribution
            allowed for automated, scalable testing frameworks for identifying
            vulnerabilities and potential exploits in embedded weapon systems.
            During my internship I shadowed full-time Software
            Engineers/Developers following Agile practices.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Extracurriculars</h2>
        <div>
          <h3 className="text-xl font-semibold">Society of Women Engineers (SWE)</h3>
          <p className="text-sm text-text-secondary">August 2023 - May 2025</p>
          <p className="mt-2">
            As one of the team leads on a STEAM project, my team and I developed
            an interactive exhibit using Arduino Nano technology. The exhibit
            featured an educational display of the ocean's layers, enhanced with
            interactive elements like motors and sensor-activated LED lights.
            Showcased at the CADE Museum for Creativity and Innovation in
            Gainesville, the exhibit attracted over 200 visitors.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Women in Computer Science Club (WiCSE)</h3>
          <p className="text-sm text-text-secondary">August 2022 - May 2025</p>
          <p className="mt-2">
            As an active member of WiCSE I am advently involved with the events,
            workshops, and opportunities that WiCSE offers. As part of a
            Hack-a-Thon that WiCSE offered, my group developed a website that
            teaches beginners how to play chess to promote and encourage new
            incomers to chess.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Education</h2>
        <div>
          <h3 className="text-xl font-semibold">University of Florida</h3>
          <p className="text-sm text-text-secondary">August 2022 - May 2025</p>
          <p className="mt-2">
            Studying for Computer Science B.S Degree w/ Minor in Digital Arts and Sciences and
            Artificial Intelligence Certificate.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">St. Petersburg College</h3>
          <p className="text-sm text-text-secondary">August 2021 - May 2022</p>
          <p className="mt-2">
            Completed Associates of Arts Degree within Early College Program.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Skills</h2>
        <Skills />
      </section>
    </div>
  );
};

export default About;
