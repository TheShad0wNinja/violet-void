import React from 'react';
import { Link } from 'react-router';

function GameCardFullData({ game }) {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const coverImage = `${game.images?.cover}`;

  return (
    <Link to={`/store/product/${game._id}`}>

    <div className="flex flex-col h-[400px] rounded-lg bg-secondary-900 text-white md:flex-row">
      {/* Image Section */}
      <div className="relative w-full  md:w-1/2">
       
        <img
          className="h-full w-full object-cover"
          src={coverImage} // Using first image from the array
          alt={game.name}
        />
      </div>
      
      {/* Info Section */}
      <div className="w-full p-5 md:w-1/2">
        <h1 className="mb-5 text-2xl font-bold">{game.title}</h1>
        
        <div className="mb-5 grid grid-cols-[120px_1fr] gap-y-2">
          <span className="text-gray-400">Age rating</span>
          <span>{game.ageRating}</span>
          
          <span className="text-gray-400">Developer</span>
          <span>{game.developer}</span>
          
          <span className="text-gray-400">Release date</span>
          <span>{new Date(game.releaseDate).toLocaleDateString()}</span>
     
          <span className="text-gray-400">Price</span>
          <span>
            ${game.price}
            {game.discount > 0 && (
              <span className="ml-2 text-green-400">
                (-{game.discount}%)
              </span>
            )}
          </span>
          
          <span className="text-gray-400">Rating</span>
          <span>{game.rating.toFixed(1)}</span>
        </div>
        
        <div className="mb-4 flex flex-wrap gap-2">
          {game.categories.map((tag, index) => (
            <span key={index} className="rounded bg-gray-700 px-3 py-1 text-sm">
              {tag}
            </span>
          ))}
        </div>
       
        
        
      </div>
    </div>
    </Link>
  );
}

export default GameCardFullData;