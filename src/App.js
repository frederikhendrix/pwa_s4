import axios from "axios";
import { useRef } from "react";
import {
  ingloriousBastardsHSB,
  brothersSceneHSB,
  aBeautifulMindSceneHSB,
} from "./javascriptScenes.js";

function App() {
  const videoRefBrothers = useRef(null);
  const videoRefABeautifulMind = useRef(null);
  const videoRefIngloriousBasterds = useRef(null);

  const scenesHSB = [
    brothersSceneHSB,
    aBeautifulMindSceneHSB,
    ingloriousBastardsHSB,
  ];

  function changeColors(data, sceneInt) {
    const h = data.hue * 182;
    const s = data.sat * 2.55;
    const b = data.bri * 2.55;

    const intH = parseInt(h, 10);
    const intS = parseInt(s, 10);
    const intB = parseInt(b, 10);

    //console.log(intH);
    //console.log(intS);
    //console.log(intB);

    try {
      axios
        .put(
          `http://192.168.0.100/api/7KwyaQsT91WJE7aXrXwCzFf7D-PYItXQ4Zk5Merw/lights/1/state`,
          {
            on: true,
            sat: intS,
            bri: intB,
            hue: intH,
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
            sat: intS,
            bri: intB,
            hue: intH,
          }
        )
        .then((result) => console.log(result));
    } catch (error) {
      console.log(error);
    }
  }

  function formatTime(timeInSeconds) {
    const minutes = Math.floor(timeInSeconds / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (timeInSeconds % 60)
      .toFixed(3)
      .replace(".", ",")
      .padStart(6, "0");
    return `${minutes}:${seconds}`;
  }

  const checkVideoTimeBrothers = () => {
    const videoElement = videoRefBrothers.current;
    const currentTime = videoElement.currentTime;

    const formattedCurrentTime = formatTime(currentTime);
    const dateCurrentTime = new Date(
      `2000-01-01T00:${formattedCurrentTime.replace(",", ".")}`
    );

    //console.log(dateCurrentTime);

    scenesHSB[0].forEach((data) => {
      // Update the video hue, saturation, brightness based on the matching data

      // for (var i = 0; i < scenesHSB[0].length; i++) {
      //console.log(data[i].startTime);
      const date1 = new Date(
        `2000-01-01T00:${data.startTime.replace(",", ".")}`
      );
      const date2 = new Date(`2000-01-01T00:${data.endTime.replace(",", ".")}`);

      if (dateCurrentTime >= date1 && dateCurrentTime <= date2) {
        changeColors(data, 0);
        //console.log(dateCurrentTime);
      }
      // }
    });
  };

  const checkVideoTimeABeautifulMind = () => {
    const videoElement = videoRefABeautifulMind.current;
    const currentTime = videoElement.currentTime;

    const formattedCurrentTime = formatTime(currentTime);

    const dateCurrentTime = new Date(
      `2000-01-01T00:${formattedCurrentTime.replace(",", ".")}`
    );

    //console.log(dateCurrentTime);

    scenesHSB[1].forEach((data) => {
      // Update the video hue, saturation, brightness based on the matching data

      console.log(data.startTime);

      // for (var i = 0; i < scenesHSB[1].length; i++) {
      //console.log(data[i].startTime);
      const date1 = new Date(
        `2000-01-01T00:${data.startTime.replace(",", ".")}`
      );
      const date2 = new Date(`2000-01-01T00:${data.endTime.replace(",", ".")}`);

      if (dateCurrentTime >= date1 && dateCurrentTime <= date2) {
        changeColors(data, 1);
        //console.log(dateCurrentTime);
      }
      // }
    });
  };

  const checkVideoTimeIngloriousBasterds = () => {
    const videoElement = videoRefIngloriousBasterds.current;
    const currentTime = videoElement.currentTime;

    const formattedCurrentTime = formatTime(currentTime);

    const dateCurrentTime = new Date(
      `2000-01-01T00:${formattedCurrentTime.replace(",", ".")}`
    );

    //console.log(dateCurrentTime);

    scenesHSB[2].forEach((data) => {
      // Update the video hue, saturation, brightness based on the matching data

      console.log(data.startTime);

      // for (var i = 0; i < scenesHSB[1].length; i++) {
      //console.log(data[i].startTime);
      const date1 = new Date(
        `2000-01-01T00:${data.startTime.replace(",", ".")}`
      );
      const date2 = new Date(`2000-01-01T00:${data.endTime.replace(",", ".")}`);

      if (dateCurrentTime >= date1 && dateCurrentTime <= date2) {
        changeColors(data, 1);
        //console.log(dateCurrentTime);
      }
      // }
    });
  };

  return (
    <div className="App">
      <video
        className="react-player fixed-bottom"
        src="videos/abeautifulmind.MP4"
        ref={videoRefABeautifulMind}
        onTimeUpdate={() => checkVideoTimeABeautifulMind()}
        width="80%"
        height="80%"
        controls={true}
      ></video>
      <video
        className="react-player fixed-bottom"
        src="videos/brothers.MP4"
        ref={videoRefBrothers}
        onTimeUpdate={() => checkVideoTimeBrothers()}
        width="80%"
        height="80%"
        controls={true}
      ></video>
      <video
        className="react-player fixed-bottom"
        src="videos/ingloriousbasterds.MP4"
        ref={videoRefIngloriousBasterds}
        onTimeUpdate={() => checkVideoTimeIngloriousBasterds()}
        width="80%"
        height="80%"
        controls={true}
      ></video>
    </div>
  );
}

export default App;
