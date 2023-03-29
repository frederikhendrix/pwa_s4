import "./App.css";
import axios from "axios";
import { useState } from "react";

function App() {
  const [color, setColor] = useState();

  function handleColorChange(color2) {
    setColor(color2);
    try {
      axios
        .put(
          `http://192.168.0.100/api/7KwyaQsT91WJE7aXrXwCzFf7D-PYItXQ4Zk5Merw/lights/1/state`,
          {
            on: true,
            sat: 254,
            bri: 150,
            hue: color2,
          }
        )
        .then((result) => console.log(result));
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="App">
      <button onClick={() => handleColorChange(0)}>Red</button>
      <button onClick={() => handleColorChange(25500)}>Green</button>
      <button onClick={() => handleColorChange(46920)}>Blue</button>
      <div>{color}</div>
    </div>
  );
}

export default App;
