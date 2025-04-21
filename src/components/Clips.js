// src/components/Clips.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Clips() {
  const [clips, setClips] = useState([]);

  // Chargement initial des clips
  useEffect(() => {
    fetchClips();
  }, []);

  const fetchClips = () => {
    axios.get('http://localhost:4000/api/clips')
      .then(response => {
        console.log('Réponse API Clips:', response.data);
        setClips(response.data);
      })
      .catch(error => console.error('Erreur lors de la récupération des clips:', error));
  };

  // Fonction pour supprimer un clip via l'endpoint DELETE
  const handleDelete = (id) => {
    if (window.confirm("Voulez-vous vraiment supprimer ce clip ?")) {
      axios.delete(`http://localhost:4000/api/clips/${id}`)
        .then(() => {
          // Mettre à jour la liste locale en retirant le clip supprimé
          setClips(prevClips => prevClips.filter(clip => clip.id !== id));
        })
        .catch(error => console.error('Erreur lors de la suppression du clip:', error));
    }
  };

  // Fonction pour renommer la catégorie d'un clip via l'endpoint PUT
  const handleRename = (id) => {
    const newCategory = window.prompt("Entrez la nouvelle catégorie pour ce clip:");
    if (!newCategory) return;
    axios.put(`http://localhost:4000/api/clips/${id}`, { category: newCategory })
      .then(response => {
        // Mettre à jour la liste locale en modifiant la catégorie du clip concerné
        setClips(prevClips => 
          prevClips.map(clip => clip.id === id ? { ...clip, category: newCategory } : clip)
        );
      })
      .catch(error => console.error('Erreur lors du renommage du clip:', error));
  };

  return (
    <div>
      <h2>Liste des Clips</h2>
      <div className="row">
        {clips.map((clip) => (
          <div key={clip.id} className="col-md-4 mb-3">
            <div className="card h-100">
              <div className="card-body">
                {/* Affiche la catégorie, la date, et le lien */}
                <h5 className="card-title">{clip.category}</h5>
                <p className="card-text">{new Date(clip.date).toLocaleString()}</p>
                <a href={clip.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Voir le Clip
                </a>
                <div className="mt-2">
                  {/* Bouton de suppression */}
                  <button 
                    className="btn btn-danger me-2"
                    onClick={() => handleDelete(clip.id)}
                  >
                    X
                  </button>
                  {/* Bouton de renommage */}
                  <button 
                    className="btn btn-secondary"
                    onClick={() => handleRename(clip.id)}
                  >
                    Renommer
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Clips;
