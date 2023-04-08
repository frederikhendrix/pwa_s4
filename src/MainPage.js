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

  const imagesUrl = [
    "/images/brothersimage.jpg",
    "/images/abeautifulmindimage.jpg",
    "/images/ingloriousbasterdsimage.jpg",
  ];

  const gradientUrl = [
    "/images/brotherGradient.jpg",
    "/images/brotherGradient.jpg",
    "/images/brotherGradient.jpg",
  ];

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
          <button className="buttonSearch" onClick={handleOnClick}>
            Search
          </button>
        </div>
      </div>
      <div className="videoFeedBackWrap">
        <div className="posterFilmWrap">
          <img
            className="posterFilm"
            src={imagesUrl[videoInteger]}
            alt="Movie Image"
          ></img>
        </div>
        <div className="gradientFilmWrap">
          <img
            className="gradientFilm"
            src={gradientUrl[videoInteger]}
            alt="Gradient Movie Image"
          ></img>
        </div>
      </div>
      <div className="bottomButtonsWrap">
        <button className="streamMovieButton">
          <a href={`/video/${videoInteger}`}>Stream Movie</a>
        </button>

        <button className="refreshMovieButton" onClick={handleOnClick}>
          Refresh Movie
        </button>
      </div>
    </div>
  );
}

export default MainPage;
