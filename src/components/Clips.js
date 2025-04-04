// src/components/Clips.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Clips() {
  const [clips, setClips] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/api/clips')
      .then(response => {
        console.log('Réponse API Clips:', response.data);
        setClips(response.data);
      })
      .catch(error => console.error('Erreur lors de la récupération des clips:', error));
  }, []);

  return (
    <div>
      <h2>Liste des Clips</h2>
      <div className="row">
        {clips.map((clip, index) => (
          <div key={index} className="col-md-4 mb-3">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{clip.category}</h5>
                <p className="card-text">{new Date(clip.date).toLocaleString()}</p>
                <a href={clip.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Voir le Clip
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Clips;
