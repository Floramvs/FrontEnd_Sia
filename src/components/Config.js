// src/components/Config.js
import React, { useState } from 'react';

function Config() {
  const [config, setConfig] = useState({
    keywords: ''
  });

  const handleChange = (e) => {
    setConfig({ ...config, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Configuration soumise :", config);
    // Ici, tu ferais un appel API pour sauvegarder la configuration sur ton backend
  };

  return (
    <div>
      <h2>Configuration</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Mots-clés (séparés par des virgules)</label>
          <input 
            type="text"
            name="keywords"
            className="form-control"
            value={config.keywords}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-success">Sauvegarder</button>
      </form>
    </div>
  );
}

export default Config;
