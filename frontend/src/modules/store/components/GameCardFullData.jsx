import React from 'react';

function GameCardFullData({ game }) {
  return (
    <div className="flex flex-col h-[400px] rounded-lg bg-gray-900 text-white md:flex-row">
      {/* Image Section */}
      <div className="relative w-full  md:w-1/2">
        <div className="absolute left-0 top-0 z-10 rounded-br-3xl bg-secondary px-3 py-2 font-bold md:text-2xl">
          {game.id}
        </div>
        <img
          className="h-full w-full object-cover"
          src={game.images[0]} // Using first image from the array
          alt={game.name}
        />
      </div>
      
      {/* Info Section */}
      <div className="w-full p-5 md:w-1/2">
        <h1 className="mb-5 text-2xl font-bold">{game.name}</h1>
        
        <div className="mb-5 grid grid-cols-[120px_1fr] gap-y-2">
          <span className="text-gray-400">Age rating</span>
          <span>{game.ageRating}</span>
          
          <span className="text-gray-400">Developer</span>
          <span>{game.developer}</span>
          
          <span className="text-gray-400">Release date</span>
          <span>{new Date(game.releaseDate).toLocaleDateString()}</span>
          
          <span className="text-gray-400">Players</span>
          <span>{game.playersAmount}</span>
          
          <span className="text-gray-400">Price</span>
          <span>
            ${game.price.toFixed(2)}
            {game.discount > 0 && (
              <span className="ml-2 text-green-400">
                (-{game.discount}%)
              </span>
            )}
          </span>
          
          <span className="text-gray-400">Rating</span>
          <span>{game.rating}/10</span>
        </div>
        
        <div className="mb-4 flex flex-wrap gap-2">
          {game.tags.map((tag, index) => (
            <span key={index} className="rounded bg-gray-700 px-3 py-1 text-sm">
              {tag}
            </span>
          ))}
        </div>
       
        
        
      </div>
    </div>
  );
}

export default GameCardFullData;