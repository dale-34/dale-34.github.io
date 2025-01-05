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

const projects = [
  {
    id: 1,
    title: 'Memory Manager',
    description: `Developed a memory manager with features include initializing, tracking, allocating, and deallocating sections of memory. 
    Avoids external/internal fragmentation and allows for efficient memory allocation`,
    githubLink: 'https://github.com/dale-34/Memory-Manager',
    tags: ['C++', 'Operating Systems']
  },
  {
    id: 2,
    title: 'Userspace Filesystem',
    description: `Developed a library that reads and writes to WAD files, creating a directory and file structure for them.
    Implements userspace daemon to access the mounted directory structure.`,
    demoLink: 'https://demo2.com',
    githubLink: 'https://github.com/user/project2',
    tags: ['C++', 'WAD']
  },
  {
    id: 3,
    title: 'Userspace Filesystem',
    description: `Developed a library that reads and writes to WAD files, creating a directory and file structure for them.
    Implements userspace daemon to access the mounted directory structure.`,
    demoLink: 'https://demo2.com',
    githubLink: 'https://github.com/user/project2',
    tags: ['C++', 'WAD']
  },
  {
    id: 4,
    title: 'Playlist Generator',
    description: `Designed a playlist generator utilizing data structures algorithms, Breadth-First Search (BFS) and Depth-First Search (DFS).
    Improved user control over playlists compared to traditional platforms allowing users to create a playlist based on genre and energy level.`,
    demoLink: 'https://youtu.be/nGgNfZa6rM8',
    githubLink: 'https://github.com/dale-34/PlaylistGenerator',
    tags: ['SFML', 'C++']
  }
];


const ProjectsList = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {projects.map(project => (
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

export default ProjectsList;
