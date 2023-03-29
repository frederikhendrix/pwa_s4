import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
function App() {
  const [color, setColor] = useState("ffffff");
  function handleColorChange(color) {
    setColor(color);
    axios.put(
      `http://192.168.0.100/api/7KwyaQsT91WJE7aXrXwCzFf7D-PYItXQ4Zk5Merw/lights/EE0BA2/state`,
      {
        on: true,
        sat: 254,
        bri: 150,
        hue: parseInt(color, 16),
      }
    );
  }
  return (
    <div className="App">
      <button onClick={() => handleColorChange("ff0000")}>Red</button>
      <button onClick={() => handleColorChange("00ff00")}>Green</button>
    </div>
  );
}

export default App;
