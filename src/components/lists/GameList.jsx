import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';


const ProjectCard = ({ id, title, description, demoLink, githubLink, tags }) => (
  <div className="bg-white shadow rounded-lg p-6 mb-6">
    <h3 className="text-xl font-semibold mb-2">
      <Link to={`/projects/${id}`} className="text-primary">{title}</Link>
    </h3>
    <p className="text-text-secondary mb-4">{description}</p>
    <div className="flex flex-wrap gap-2 mb-4">
      {tags && tags.map((tag, index) => (
        <span key={index} className="bg-secondary text-text-secondary px-2 py-1 rounded-full text-sm">{tag}</span>
      ))}
    </div>
    {demoLink && <a href={demoLink} target="_blank" rel="noopener noreferrer" className="text-primary mr-4">View Demo</a>}
    {githubLink && <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-primary">View on GitHub</a>}
  </div>
);

const games = [
  {
    id: 1,
    title: 'Pizza Panic',
    description: `Utilizing OOP concepts, developed frogger-style game.`,
    demoLink: 'https://youtu.be/c8FQVOfWrIc?si=1SYXi5IlaHvoCDSJ',
    githubLink: 'https://github.com/dale-34/PizzaPanic',
    tags: ['Java', 'Processing']
  },
  {
    id: 2,
    title: 'Agora',
    description: `Artwork inspired by Junjo Ito's Uzumaki, escape your fears and keep your sanity!`,
    demoLink: 'https://youtu.be/6Rgrj5O43_Y?si=pcXPjhxCZaSoklmn',
    tags: ['C#', 'Unity']
  },
  {
    id: 3,
    title: 'Domotron',
    description: `Arcade, action, scroll style based game. Fight your way through enemies and uncover clues about Domotron.`,
    demoLink: 'https://youtu.be/6Rgrj5O43_Y?si=pcXPjhxCZaSoklmn',
    tags: ['C#', 'Unity']
  },
];


const GameList = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {games.map(project => (
      <ProjectCard
        key={project.id}
        id={project.id}
        title={project.title}
        description={project.description}
        demoLink={project.demoLink}
        githubLink={project.githubLink}
        tags={project.tags}
      />
    ))}
  </div>
);

export default GameList;
