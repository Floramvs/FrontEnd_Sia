// src/components/Clips.js
import React, { useEffect, useState } from 'react'
import axios from 'axios'

// On lit l'URL de l'API depuis la variable d'env ou on tombe sur localhost
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:4000'

export default function Clips() {
  const [clips, setClips] = useState([])

  // Chargement initial
  useEffect(() => {
    fetchClips()
  }, [])

  // GET /api/clips
  const fetchClips = () => {
    axios
      .get(`${API_URL}/api/clips`)
      .then(({ data }) => setClips(data))
      .catch(err => console.error('Erreur récupération clips :', err))
  }

  // DELETE /api/clips/:id
  const handleDelete = id => {
    if (!window.confirm("Voulez‑vous vraiment supprimer ce clip ?")) return

    axios
      .delete(`${API_URL}/api/clips/${id}`)
      .then(() => {
        setClips(cs => cs.filter(c => c.id !== id))
      })
      .catch(err => console.error('Erreur suppression clip :', err))
  }

  // PUT /api/clips/:id
  const handleRename = id => {
    const newCat = window.prompt("Nouvelle catégorie :")
    if (!newCat) return

    axios
      .put(`${API_URL}/api/clips/${id}`, { category: newCat })
      .then(({ data }) => {
        setClips(cs =>
          cs.map(c => (c.id === id ? { ...c, category: data.clip.category } : c))
        )
      })
      .catch(err => console.error('Erreur renommage clip :', err))
  }

  return (
    <div>
      <h2>Liste des Clips</h2>
      <div className="row">
        {clips.map(clip => (
          <div key={clip.id} className="col-md-4 mb-3">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">😊 {clip.category}</h5>
                <p className="card-text text-muted">
                  {new Date(clip.date).toLocaleString()}
                </p>
                <a
                  href={clip.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary mt-auto"
                >
                  Voir le clip
                </a>
                <div className="mt-2 d-flex justify-content-end">
                  <button
                    className="btn btn-sm btn-danger me-2"
                    onClick={() => handleDelete(clip.id)}
                  >
                    ✕
                  </button>
                  <button
                    className="btn btn-sm btn-secondary"
                    onClick={() => handleRename(clip.id)}
                  >
                    Renommer
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        {clips.length === 0 && (
          <p className="text-center mt-4">Aucun clip pour le moment</p>
        )}
      </div>
    </div>
  )
}
