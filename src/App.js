import axios from "axios";
import { useState } from "react";

function App() {
  const [color, setColor] = useState();

  function hexToHsl(hex) {
    // Convert hex to RGB first
    var r = parseInt(hex.slice(1, 3), 16);
    var g = parseInt(hex.slice(3, 5), 16);
    var b = parseInt(hex.slice(5, 7), 16);

    // Then convert RGB to HSL

    r /= 255;
    g /= 255;
    b /= 255;
    var max = Math.max(r, g, b),
      min = Math.min(r, g, b);
    var h,
      s,
      l = (max + min) / 2;

    if (max == min) {
      h = s = 0; // achromatic
    } else {
      var d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
      }
      h /= 6;
    }

    // Convert HSL values to percentages and round to 2 decimal places
    h = Math.round(h * 360);
    s = Math.round(s * 100);
    l = Math.round(l * 100);

    const colors = [h, s, l];

    // Return HSL as an object
    return colors;
  }

  function handleColorChange(color2) {
    const colorCode = hexToHsl(color2);
    const h = colorCode[0] * 182;
    const s = 256 * (colorCode[1] / 100);
    const l = 256 * (colorCode[2] / 100);

    console.log(colorCode[0]);
    console.log(colorCode[1]);
    console.log(colorCode[2]);

    console.log(h);
    console.log(s);
    console.log(l);

    const intH = Math.trunc(h);
    const intS = Math.trunc(s);
    const intL = Math.trunc(l);

    setColor(colorCode);
    try {
      axios
        .put(
          `http://192.168.0.100/api/7KwyaQsT91WJE7aXrXwCzFf7D-PYItXQ4Zk5Merw/lights/1/state`,
          {
            on: true,
            sat: 255,
            bri: 255,
            hue: 43680,
          }
        )
        .then((result) => console.log(result));
    } catch (error) {
      console.log(error);
    }
    console.log(intH);
    console.log(intS);
    console.log(intL);
  }
  return (
    <div className="App">
      <button onClick={() => handleColorChange("ff0000")}>Red</button>
      <button onClick={() => handleColorChange("00ff00")}>Green</button>
      <button onClick={() => handleColorChange("0000ff")}>Blue</button>
      <div>{color}</div>
    </div>
  );
}

export default App;
