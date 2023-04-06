import React, { useState } from "react";
import "./MainPage.css";

function MainPage() {
  const [videoInteger, setVideoInteger] = useState(0);
  const options = [
    "Sadness",
    "Happiness",
    "Fear",
    "Anger",
    "Surprise",
    "Disgust",
    "Cheerful",
    "Reflective",
    "Gloomy",
    "Humorous",
    "Melancholy",
    "Idyllic",
    "Whimsical",
    "Romantic",
  ];
  const [selectedValue, setSelectedValue] = useState(""); // set initial selected value to empty string

  const handleSelect = (e) => {
    setSelectedValue(e.target.value);
  };

  const handleOnClick = () => {
    const ranD = Math.floor(Math.random() * 3);
    console.log(ranD);
    setVideoInteger(ranD);
  };

  return (
    <div className="mainPageMainWrap">
      <div className="searchBarWrap">
        <div className="dropdownWrap">
          <select
            className="selectValue"
            value={selectedValue}
            onChange={handleSelect}
          >
            <option value="">Select an option</option> // set default empty
            option
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <button onClick={handleOnClick}>Search</button>
        </div>
      </div>
      <div className="videoFeedBackWrap">
        this is the video feedback component
      </div>
      <div className="bottomButtonsWrap">
        <button>
          <a href={`/video/${videoInteger}`}>Stream Movie</a>
        </button>
      </div>
    </div>
  );
}

export default MainPage;
