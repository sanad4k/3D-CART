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
    { id: 1, src: '/photos/1.png', name: 'The Man', category: '3D', artist: 'xinming', price: 100, description: 'A stunning 3D model with intricate details.' },
    { id: 2, src: '/photos/2.png', name: 'pumkins', category: '3D', artist: 'John corner', price: 200, description: 'A stunning 3D model with intricate details..' },
    
    { id: 4, src: '/photos/4.png', name: 'Birdman', category: '3D', artist: 'Alexander', price: 200, description: 'A high qulaity 3D rendering.' },
    { id: 5, src: '/photos/5.png', name: 'Yoda(ancient man)', category: '3D', artist: 'John', price: 200, description: 'A high  3D rendering.' },
    { id: 6, src: '/photos/6.png', name: 'Astronaut', category: '3D', artist: 'Hasbulla', price: 200, description: 'A high-quality texture for 3D rendering.' },
    { id: 7, src: '/photos/7.png', name: 'future room', category: '3D', artist: 'Jerry', price: 200, description: 'A high 3D rendering.' },
    { id: 8, src: '/photos/8.png', name: 'Walter White', category: '3D', artist: 'Jim', price: 200, description: 'A high 3D rendering.' },
    { id: 9, src: '/photos/9.png', name: 'Mouse Family', category: '3D', artist: 'Ravi', price: 200, description: 'A high-quality texture for 3D rendering.' },
    { id: 10, src: '/photos/10.png', name: 'JINX', category: '3D', artist: 'Sayed Mohamed', price: 200, description: 'A high qulaity 3D rendering.' },
    { id: 11, src: '/photos/11.png', name: 'Skeleton Cart', category: 'TEXTURE', artist: 'John', price: 200, description: 'A high-quality texture for 3D rendering.' },
    { id: 12, src: '/photos/12.png', name: 'BEE', category: '3D', artist: 'Cerci Fox', price: 200, description: 'A high-quality texture for 3D rendering.' },
    { id: 13, src: '/photos/13.png', name: 'R29', category: '3D', artist: 'Rithwik', price: 200, description: 'A high-quality texture for 3D rendering.' },
    { id: 14, src: '/photos/14.png', name: 'Harry Truman', category: '3D', artist: 'John', price: 200, description: 'A high-quality  3D rendering.' },
    { id: 15, src: '/photos/15.png', name: 'Brick Wall', category: 'TEXTURE', artist: 'John', price: 200, description: 'A high-quality texture for 3D rendering.' },
    { id: 16, src: '/photos/16.png', name: 'Leather(dark brown)', category: 'TEXTURE', artist: 'John', price: 200, description: 'A high-quality texture for 3D rendering.' },
    { id: 17, src: '/photos/17.png', name: 'Wooden Finish', category: 'TEXTURE', artist: 'John', price: 200, description: 'A high-quality texture for 3D rendering.' },
    { id: 18, src: '/photos/18.png', name: 'File Organiser', category: 'PLUGGIN', artist: 'John', price: 200, description: 'A high-quality texture for 3D rendering.' },
    { id: 19, src: '/photos/19.png', name: 'Mesh cleaner', category: 'PLUGGIN', artist: 'John', price: 200, description: 'A high-quality texture for 3D rendering.' },
    { id: 3, src: '/photos/3.png', name: 'Birdman', category: 'TEXTURE', artist: 'John', price: 200, description: 'A high-quality texture for 3D rendering.' },
   
   
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
                <h3 className='card_name card_spacing'>{card.name}</h3>
                <p className='card_artist card_spacing'>Artist: {card.artist}</p>
                <p className='card_price card_spacing'>Price: ₹{card.price}</p><p className='card_price card_spacing'>{card.category}</p>
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
            <h2 className='black'>{selectedCard.name}</h2>
            <p className='black'>Artist: {selectedCard.artist}</p>
            <p className='black'>Price: ₹{selectedCard.price}</p>
            <p childrenlassName='black'> {selectedCard.description}</p>
            <h3 className='buybutton'>buy</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardList;
