import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage.js";
import VideoPage from "./VideoPage.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route exact path="/video/:id" element={<VideoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
