import React, { useState } from 'react';
import ColorPicker from './components/ColorPicker';
import ColorDisplay from './components/ColorDisplay';
import FavoriteColors from './components/FavoriteColors';

function App() {
  const [color, setColor] = useState('#fff');
  const [favorites, setFavorites] = useState([]);

  const handleColorChange = (newColor) => {
    setColor(newColor);
  };

  const addFavorite = () => {
    setFavorites([...favorites, color]);
  };

  return (
    <div className="App">
      <h1>🎨 Color Craft</h1>
      <ColorPicker onColorChange={handleColorChange} />
      <ColorDisplay color={color} />
      <button onClick={addFavorite}>Add to Favorites</button>
      <FavoriteColors favorites={favorites} />
    </div>
  );
}

export default App;
