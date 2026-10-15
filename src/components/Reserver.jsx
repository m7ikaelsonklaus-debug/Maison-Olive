import React, { useState } from 'react';
import Navbar from './Navbar';
import './Reserver.css';

export default function Reserver({ currentPage, setCurrentPage, darkMode, toggleDarkMode }) {
  const [form, setForm] = useState({
    nom: '',
    date: '',
    personnes: '2',
    heure: '19h30'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Réservation enregistrée avec succès !');
  };

  return (
    <div className="page-wrapper">
      <div className="container">
        <Navbar 
          currentPage={currentPage} 
          setCurrentPage={setCurrentPage} 
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />

        <div className="reserver-header-area">
          <h2 className="page-title">Réserver & nous trouver</h2>
          <p className="page-subtitle">Réponse de confirmation sous 1 heure.</p>
        </div>

        <div className="reserver-grid">
         
          <div className="res-card">
            <h3 className="res-card-title">Réservation</h3>
            
            <form onSubmit={handleSubmit} className="res-form">
              <div className="form-group">
                <label htmlFor="nom">Nom</label>
                <input 
                  id="nom"
                  type="text" 
                  placeholder="Votre nom" 
                  value={form.nom}
                  onChange={(e) => setForm({...form, nom: e.target.value})}
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="date">Date</label>
                <input 
                  id="date"
                  type="date" 
                  placeholder="jj/mm/aaaa" 
                  value={form.date}
                  onChange={(e) => setForm({...form, date: e.target.value})}
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="personnes">Personnes</label>
                <input 
                  id="personnes"
                  type="number" 
                  min="1"
                  max="20"
                  value={form.personnes}
                  onChange={(e) => setForm({...form, personnes: e.target.value})}
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="heure">Heure</label>
                <input 
                  id="heure"
                  type="text" 
                  placeholder="19h30"
                  value={form.heure}
                  onChange={(e) => setForm({...form, heure: e.target.value})}
                  required 
                />
              </div>

              <button type="submit" className="confirm-btn">
                Confirmer
              </button>
            </form>
          </div>

          {/* Contact & Hours Info Box (Right Column) */}
          <div className="res-card">
            <h3 className="res-card-title">Contact</h3>
            <div className="info-block">
              <p className="contact-info">
                12 rue des Oliviers<br />
                +212 5 00 00 00 00<br />
                contact@maisonolive.example
              </p>
            </div>

            <h3 className="res-card-title mt-35">Horaires</h3>
            <div className="info-block">
              <p className="contact-info">
                Tous les jours<br />
                12h – 15h · 19h – 23h
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}