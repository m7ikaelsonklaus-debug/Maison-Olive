import React from 'react';
import Navbar from './Navbar';
import './Accueil.css';

export default function Accueil({ currentPage, setCurrentPage, darkMode, toggleDarkMode }) {
  return (
    <div className="page-wrapper">
      <div className="container">
        <Navbar 
            currentPage={currentPage} 
            setCurrentPage={setCurrentPage} 
            darkMode={darkMode}
            toggleDarkMode={toggleDarkMode}
            />


        <section className="hero-section">
          <span className="hero-subtitle">CUISINE MÉDITERRANÉENNE</span>
          <h2 className="hero-title">Des saveurs de saison, faites maison</h2>
          <p className="hero-desc">Produits frais, recettes généreuses et une ambiance chaleureuse, midi et soir.</p>
          <button className="hero-btn" onClick={() => setCurrentPage('reserver')}>
            Réserver une table
          </button>
        </section>


        <div className="features-grid">
          <div className="feature-box">
            <h3>Produits frais</h3>
            <p>Des ingrédients locaux choisis chaque matin auprès de nos producteurs.</p>
          </div>
          <div className="feature-box">
            <h3>Cuisine maison</h3>
            <p>Tajines, poissons grillés et desserts préparés sur place.</p>
          </div>
          <div className="feature-box">
            <h3>Horaires</h3>
            <p>Tous les jours<br />12h – 15h · 19h – 23h</p>
          </div>
        </div>


        <section className="section-incontournables">
          <h3 className="section-heading">Nos incontournables</h3>
          <div className="incontournables-card">
            <div className="menu-item-row">
              <div>
                <span className="item-name">Tajine d'agneau aux pruneaux</span>
                <span className="item-desc">Amandes grillées, semoule fine</span>
              </div>
              <span className="item-price">130 DH</span>
            </div>
            <hr className="divider" />
            <div className="menu-item-row">
              <div>
                <span className="item-name">Filet de dorade</span>
                <span className="item-desc">Légumes rôtis, sauce citron</span>
              </div>
              <span className="item-price">120 DH</span>
            </div>
            <hr className="divider" />
            <div className="menu-item-row">
              <div>
                <span className="item-name">Fondant au chocolat</span>
                <span className="item-desc">Cœur coulant, glace vanille</span>
              </div>
              <span className="item-price">50 DH</span>
            </div>
          </div>
        </section>

        <footer className="site-footer">
          © Maison Olive - Maquette de site web
        </footer>
      </div>
    </div>
  );
}