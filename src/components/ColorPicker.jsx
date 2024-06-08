import React, { useState } from 'react';
import { SketchPicker } from 'react-color';

const ColorPicker = ({ onColorChange }) => {
  const [color, setColor] = useState('#fff');

  const handleChangeComplete = (color) => {
    setColor(color.hex);
    onColorChange(color.hex);
  };

  return (
    <div className='cont'>
    <div className="ColorPicker">
      <SketchPicker color={color} onChangeComplete={handleChangeComplete} />
    </div>
    </div>
  );
};

export default ColorPicker;
