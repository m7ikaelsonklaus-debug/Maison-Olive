import React, { useState } from 'react';
import Navbar from './Navbar';
import './Menu.css';

export default function Menu({ currentPage, setCurrentPage, darkMode, toggleDarkMode }) {
  const [activeCategory, setActiveCategory] = useState('Entrées');
  const [selectedItems, setSelectedItems] = useState([]);

  const menuData = {
    'Entrées': [
      { id: 'e1', name: 'Salade de chèvre chaud', desc: 'Roquette, miel, noix, toast complet', price: '55 DH' },
      { id: 'e2', name: 'Velouté de potiron', desc: 'Crème légère, graines de courge', price: '45 DH' },
      { id: 'e3', name: 'Carpaccio de bœuf', desc: 'Parmesan, câpres, huile d\'olive', price: '70 DH' }
    ],
    'Plats': [
      { id: 'p1', name: "Tajine d'agneau aux pruneaux", desc: 'Amandes grillées, semoule fine', price: '130 DH' },
      { id: 'p2', name: 'Filet de dorade', desc: 'Légumes rôtis, sauce citron', price: '120 DH' },
      { id: 'p3', name: 'Risotto aux champignons', desc: 'Parmesan, persil, huile de truffe', price: '95 DH' },
      { id: 'p4', name: 'Burger Maison', desc: 'Bœuf, cheddar, oignons confits, frites', price: '85 DH' }
    ],
    'Desserts': [
      { id: 'd1', name: 'Tarte au citron meringuée', desc: '', price: '45 DH' },
      { id: 'd2', name: 'Fondant au chocolat', desc: 'Cœur coulant, glace vanille', price: '50 DH' },
      { id: 'd3', name: 'Panna cotta fruits rouges', desc: '', price: '42 DH' }
    ],
    'Boissons': [
      { id: 'b1', name: 'Thé à la menthe', desc: '', price: '20 DH' },
      { id: 'b2', name: "Jus d'orange pressé", desc: '', price: '25 DH' },
      { id: 'b3', name: 'Limonade maison', desc: 'Citron, menthe, gingembre', price: '25 DH' },
      { id: 'b4', name: 'Café / Expresso', desc: '', price: '18 DH' }
    ]
  };

  const handleSelectItem = (item) => {
    if (selectedItems.some(i => i.id === item.id)) {
      setSelectedItems(selectedItems.filter(i => i.id !== item.id));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const currentItems = menuData[activeCategory];

  return (
    <div className="page-wrapper">
      <div className="container">
        <Navbar 
            currentPage={currentPage} 
            setCurrentPage={setCurrentPage} 
            darkMode={darkMode}
            toggleDarkMode={toggleDarkMode}
            />

        <div className="menu-header-area">
          <h2 className="page-title">Notre menu</h2>
          <p className="page-subtitle">Prix en DH, taxes incluses. Merci de signaler toute allergie.</p>
          
          <div className="filter-tabs">
            {Object.keys(menuData).map((category) => (
              <button 
                key={category}
                type="button"
                className={`filter-tab-btn ${activeCategory === category ? 'active' : ''}`} 
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Displays ONLY the active category */}
        <div className="single-category-container">
          <div className="menu-card-column">
            <h3 className="category-title">{activeCategory}</h3>

            {currentItems.map((item, idx) => {
              const isSelected = selectedItems.some(i => i.id === item.id);
              return (
                <React.Fragment key={item.id}>
                  {idx > 0 && <hr className="divider" />}
                  <div className="menu-item-row">
                    <div className="item-details">
                      <span className="item-name">{item.name}</span>
                      {item.desc && <span className="item-desc">{item.desc}</span>}
                    </div>
                    
                    <div className="item-action-group">
                      <span className="item-price">{item.price}</span>
                      <button 
                        type="button"
                        className={`btn-choisir ${isSelected ? 'selected' : ''}`}
                        onClick={() => handleSelectItem(item)}
                      >
                        {isSelected ? 'Sélectionné' : 'Choisir'}
                      </button>
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}