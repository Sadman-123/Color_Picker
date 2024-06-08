import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const ColorDisplay = ({ color }) => {
  const rgbColor = hexToRgb(color);

  function hexToRgb(hex) {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgb(${r}, ${g}, ${b})`;
  }

  return (
    <div className="ColorDisplay" style={{ backgroundColor: color }}>
      <h2>Selected Color</h2>
      <p>Hex: {color}</p>
      <p>RGB: {rgbColor}</p>
      <CopyToClipboard text={color}>
        <button className="copy-button">Copy Hex to Clipboard</button>
      </CopyToClipboard>
    </div>
  );
};

export default ColorDisplay;
