export const invertColor = (hex) => {
    if (hex.indexOf('#') === 0) {
      hex = hex.slice(1);
    }
  
    // Convert hex to RGB
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
  
    // Invert RGB values
    const invertedR = 255 - r;
    const invertedG = 255 - g;
    const invertedB = 255 - b;
  
    // Convert back to hex
    const invertedHex = "#" + ((1 << 24) + (invertedR << 16) + (invertedG << 8) + invertedB).toString(16).slice(1);
  
    return invertedHex;
  }
  