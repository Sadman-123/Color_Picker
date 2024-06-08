import React from 'react';

const FavoriteColors = ({ favorites }) => {
  return (
    <div className="FavoriteColors">
      <h2>Favorite Colors</h2>
      <ul>
        {favorites.map((color, index) => (
          <li key={index} style={{ backgroundColor: color }}>
            {color}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoriteColors;
