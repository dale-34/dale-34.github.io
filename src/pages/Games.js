import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import GameList from '../components/lists/GameList';

const Games = () => {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold mb-6">Games</h2>
        <GameList />
    </div>
  )};

export default Games;
