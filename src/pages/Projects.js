import React, { useState, useEffect } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import ProjectsList from '../components/lists/ProjectList';

const Projects = () => {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold mb-6">Projects</h2>
        <ProjectsList />
    </div>
  );
};

export default Projects;