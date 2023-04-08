import axios from "axios";
import { useRef, useState } from "react";
import {
  ingloriousBastardsHSB,
  brothersSceneHSB,
  aBeautifulMindSceneHSB,
} from "./javascriptScenes.js";
import { useParams } from "react-router";
import "./VideoPage.css";

function VideoPage() {
  const videoRef = useRef(null);
  const { id } = useParams();
  const [videoIntensity, setVideoIntensity] = useState(0);
  console.log(id);

  const videoUrl = [
    "/videos/brothers.MP4",
    "/videos/abeautifulmind.MP4",
    "/videos/ingloriousbasterds.MP4",
  ];

  //console.log(videoUrl[id]);

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

    setVideoIntensity(data.bri);

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

  const checkVideoTime = (videoInt) => {
    const videoElement = videoRef.current;
    const currentTime = videoElement.currentTime;

    const formattedCurrentTime = formatTime(currentTime);
    const dateCurrentTime = new Date(
      `2000-01-01T00:${formattedCurrentTime.replace(",", ".")}`
    );

    //console.log(dateCurrentTime);

    scenesHSB[videoInt].forEach((data) => {
      // Update the video hue, saturation, brightness based on the matching data

      // for (var i = 0; i < scenesHSB[0].length; i++) {
      //console.log(data[i].startTime);
      const date1 = new Date(
        `2000-01-01T00:${data.startTime.replace(",", ".")}`
      );
      const date2 = new Date(`2000-01-01T00:${data.endTime.replace(",", ".")}`);

      if (dateCurrentTime >= date1 && dateCurrentTime <= date2) {
        changeColors(data, videoInt);
        //console.log(dateCurrentTime);
      }
      // }
    });
  };

  return (
    <div className="VideoPageWrap">
      <div className="backButtonNavbarSectionWrap">
        <div className="backButtonWrap">
          <button className="backButton">
            <a href="/">Back</a>
          </button>
        </div>
      </div>

      <div className="VideoSectionWrap">
        <div className="videoPlayerWrap">
          <video
            className="react-player fixed bottom"
            src={videoUrl[id]}
            ref={videoRef}
            onTimeUpdate={() => checkVideoTime(id)}
            width="80%"
            height="80%"
            controls={true}
          ></video>
        </div>
        <div className="videoIntensity">Video Intensity = {videoIntensity}</div>
      </div>
    </div>
  );
}

export default VideoPage;
