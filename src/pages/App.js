import React, { useState } from 'react';
import './App.css';
import Navbar from '../components/navbar';
import Card from '../components/card';

const CardList = () => {
  const [filter, setFilter] = useState('ALL');
  const [selectedCard, setSelectedCard] = useState(null);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const handleCloseCard = () => {
    setSelectedCard(null);
  };

  const cards = [
    { id: 1, src: '/photos/minnal.jpg', name: 'The Man', category: '3D', artist: 'Ye', price: 100, description: 'A stunning 3D model with intricate details.' },
    { id: 2, src: '/photos/minnal.jpg', name: 'Another Model', category: 'TEXTURE', artist: 'John', price: 200, description: 'A high-quality texture for 3D rendering.' },
    // ... more cards
  ];

  const filteredCards = cards.filter(card => {
    if (filter === 'ALL') return true;
    return card.category === filter;
  });

  return (
    <div>
      <Navbar />
      <div className='modeselector'>
        <div className='mode_child' onClick={() => handleFilterChange('ALL')}>ALL</div>
        <div className='mode_child' onClick={() => handleFilterChange('3D')}>3D MODELS</div>
        <div className='mode_child' onClick={() => handleFilterChange('TEXTURE')}>TEXTURES</div>
        <div className='mode_child' onClick={() => handleFilterChange('PLUGGIN')}>PLUGGINS</div>
        <div className='mode_child' onClick={() => handleFilterChange('RIG')}>BODY RIGS</div>
      </div>

      <div className="center">
        <div className="parent">
          {filteredCards.map(card => (
            // Render the card only if it is not the selected card
            selectedCard?.id !== card.id && (
              <div
                key={card.id}
                onClick={() => handleCardClick(card)}
                className={`card`}
              >
                <img src={card.src} alt={card.name} />
                <h3>{card.name}</h3>
                <p>Artist: {card.artist}</p>
                <p>Price: ₹{card.price}</p>
              </div>
            )
          ))}
        </div>
      </div>

      {/* Enlarged card display */}
      {selectedCard && (
        <div className="modal" onClick={handleCloseCard}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={handleCloseCard}>X</button>
            <img src={selectedCard.src} alt={selectedCard.name} />
            <h2>{selectedCard.name}</h2>
            <p>Artist: {selectedCard.artist}</p>
            <p>Price: ₹{selectedCard.price}</p>
            <p>{selectedCard.description}</p>
            <h3 className='buybutton'>buy</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardList;
