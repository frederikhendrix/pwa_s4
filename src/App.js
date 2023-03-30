import axios from "axios";
import { useState } from "react";

function App() {
  var i = 0;
  const trailerPirates = [
    { h: 240, s: 1.0, b: 0.2 },
    { h: 120, s: 1.0, b: 0.2 },
    { h: 30, s: 1.0, b: 1.0 },
    { h: 0, s: 1.0, b: 1.0 },
    { h: 60, s: 1.0, b: 1.0 },
    { h: 300, s: 1.0, b: 0.2 },
    { h: 180, s: 1.0, b: 0.2 },
    { h: 330, s: 1.0, b: 1.0 },
    { h: 210, s: 1.0, b: 0.8 },
    { h: 30, s: 1.0, b: 1.0 },
    { h: 120, s: 1.0, b: 0.2 },
    { h: 60, s: 1.0, b: 1.0 },
    { h: 0, s: 1.0, b: 1.0 },
    { h: 300, s: 1.0, b: 0.2 },
    { h: 330, s: 1.0, b: 1.0 },
    { h: 210, s: 1.0, b: 0.8 },
    { h: 240, s: 1.0, b: 0.33 }, // Dark blue
    { h: 120, s: 1.0, b: 0.33 }, // Green
    { h: 60, s: 1.0, b: 1.0 }, // Yellow
    { h: 300, s: 1.0, b: 0.5 }, // Purple
    { h: 180, s: 1.0, b: 0.5 }, // Teal
    { h: 330, s: 1.0, b: 1.0 }, // Pink
    { h: 0, s: 1.0, b: 1.0 }, // Red
    { h: 210, s: 1.0, b: 0.67 }, // Light blue
    { h: 120, s: 1.0, b: 0.33 }, // Green
    { h: 30, s: 1.0, b: 1.0 }, // Orange
    { h: 60, s: 1.0, b: 1.0 }, // Yellow
    { h: 240, s: 1.0, b: 0.33 }, // Dark blue
    { h: 0, s: 1.0, b: 1.0 }, // Red
    { h: 330, s: 1.0, b: 1.0 }, // Pink
    { h: 210, s: 1.0, b: 0.67 }, // Light blue
    { h: 300, s: 1.0, b: 0.5 }, // Purple
    { h: 120, s: 1.0, b: 0.33 }, // Green
    { h: 30, s: 1.0, b: 1.0 }, // Orange
    { h: 60, s: 1.0, b: 1.0 }, // Yellow
    { h: 0, s: 1.0, b: 1.0 }, // Red
    { h: 330, s: 1.0, b: 1.0 }, // Pink
    { h: 210, s: 1.0, b: 0.67 }, // Light blue
    { h: 120, s: 1.0, b: 0.33 }, // Green
    { h: 60, s: 1.0, b: 1.0 }, // Yellow
    { h: 300, s: 1.0, b: 0.5 }, // Purple
    { h: 0, s: 1.0, b: 1.0 }, // Red
    { h: 330, s: 1.0, b: 1.0 }, // Pink
    { h: 240, s: 1.0, b: 0.33 }, // Dark blue
    { h: 210, s: 1.0, b: 0.67 }, // Light blue
    { h: 120, s: 100, b: 50 },
    { h: 60, s: 100, b: 50 },
    { h: 330, s: 100, b: 50 },
    { h: 210, s: 100, b: 50 },
    { h: 300, s: 100, b: 50 },
    { h: 30, s: 100, b: 50 },
    { h: 0, s: 100, b: 50 },
    { h: 120, s: 100, b: 50 },
    { h: 60, s: 100, b: 50 },
    { h: 330, s: 100, b: 50 },
    { h: 240, s: 100, b: 50 },
    { h: 210, s: 100, b: 50 },
    { h: 300, s: 100, b: 50 },
    { h: 120, s: 100, b: 50 },
    { h: 30, s: 100, b: 50 },
    { h: 60, s: 100, b: 50 },
    { h: 0, s: 100, b: 50 },
    { h: 330, s: 100, b: 50 },
    { h: 240, s: 100, b: 50 },
    { h: 210, s: 100, b: 50 },
    { h: 120, s: 100, b: 50 },
    { h: 300, s: 100, b: 50 },
    { h: 60, s: 100, b: 50 },
    { h: 30, s: 100, b: 50 },
    { h: 0, s: 100, b: 50 },
    { h: 330, s: 100, b: 50 },
    { h: 210, s: 100, b: 50 },
    { h: 240, s: 100, b: 50 },
  ];

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

    if (max === min) {
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

  function changeColors(i) {
    const h = trailerPirates[i].h * 182;
    const s = trailerPirates[i].s * 255;
    const b = trailerPirates[i].b * 255;

    const intH = parseInt(h, 10);
    const intS = parseInt(s, 10);
    const intB = parseInt(b, 10);

    console.log(intH);
    console.log(intS);
    console.log(intB);

    try {
      axios
        .put(
          `http://192.168.0.100/api/7KwyaQsT91WJE7aXrXwCzFf7D-PYItXQ4Zk5Merw/lights/1/state`,
          {
            on: true,
            sat: s,
            bri: b,
            hue: h,
          }
        )
        .then((result) => console.log(result));
    } catch (error) {
      console.log(error);
    }

    try {
      axios
        .put(
          `http://192.168.0.100/api/7KwyaQsT91WJE7aXrXwCzFf7D-PYItXQ4Zk5Merw/lights/4/state`,
          {
            on: true,
            sat: s,
            bri: b,
            hue: h,
          }
        )
        .then((result) => console.log(result));
    } catch (error) {
      console.log(error);
    }
  }

  function playColors() {
    if (i < 1) {
      changeColors(i);
      i++;
    }

    setTimeout(function () {
      console.log(i);
      changeColors(i);
      i++;
      if (i < trailerPirates.length) {
        playColors();
      }
    }, 2000);
  }

  return (
    <div className="App">
      <button onClick={() => playColors()}>Play</button>
    </div>
  );
}

export default App;
