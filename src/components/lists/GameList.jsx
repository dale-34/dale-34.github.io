import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';


const ProjectCard = ({ id, title, description, demoLink, trailerLink, githubLink, behanceLink, tags }) => (
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
    {trailerLink && <a href={trailerLink} target="_blank" rel="noopener noreferrer" className="text-primary mr-4">View Trailer</a>}
    {githubLink && <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-primary">View on GitHub</a>}
    {behanceLink && <a href={behanceLink} target="_blank" rel="noopener noreferrer" className="text-primary">View on Behance</a>}
  </div>
);

const games = [
  {
    id: 1,
    title: 'Pizza Panic',
    description: `Utilizing OOP concepts, developed frogger-style game.`,
    demoLink: 'https://youtu.be/pn_EJu0dU7A',
    githubLink: 'https://github.com/dale-34/PizzaPanic',
    tags: ['Java', 'Processing']
  },
  {
    id: 2,
    title: 'Agora',
    description: `Artwork inspired by Junjo Ito's Uzumaki, escape your fears and keep your sanity!`,
    demoLink: 'https://youtu.be/EAW9n8z0ORA',
    tags: ['C#', 'Unity']
  },
  {
    id: 3,
    title: 'Domotron',
    description: `Arcade, action, scroll style based game. Fight your way through enemies and uncover clues about Domotron.`,
    demoLink: 'https://youtu.be/rRTrXd4CTLI',
    tags: ['C#', 'Unity']
  },
  {
    id: 4,
    title: 'Nycto',
    description: `Narrative style option-based game, unlock dialgoue options while experiencing the 2D and 3D world. Escape your nightmares and choose your ending...`,
    behanceLink: 'https://www.behance.net/gallery/222904175/Nycto',
    demoLink: 'https://youtu.be/ncWxXMZL8ew?si=IhTnnT-eLYChUeSZ',
    trailerLink: 'https://youtu.be/zxW5L-ZNp-E?si=h4Lzamm1FSOysB9i',
    tags: ['C#', 'Unity']
  },
  {
    id: 5,
    title: 'ICE-sylum',
    description: `VR-based game, you are running an ice cream shop within an asylum. Serve orders and keep the power on. Be wary of patients`,
    demoLink: 'https://youtu.be/RLE9qQgEAE4',
    trailerLink: 'https://youtu.be/IfRsYc3iJuk',
    githubLink: 'https://github.com/dale-34/ICE-sylum',
    tags: ['C#', 'Unity', 'VR', 'Meta Quest']
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
        trailerLink={project.trailerLink}
        behanceLink={project.behanceLink}
        githubLink={project.githubLink}
        tags={project.tags}
      />
    ))}
  </div>
);

export default GameList;
