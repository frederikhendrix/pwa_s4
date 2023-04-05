import axios from "axios";
import { useState } from "react";
import ReactPlayer from "react-player";

function App() {
  var i = 0;

  const brothersSceneHSB = [
    {
      startTime: "00:10,000",
      endTime: "00:17,800",
      hue: 240,
      sat: 100,
      bri: 10,
    },
    {
      startTime: "00:17,800",
      endTime: "00:20,400",
      hue: 240,
      sat: 100,
      bri: 10,
    },
    {
      startTime: "00:20,400",
      endTime: "00:23,120",
      hue: 240,
      sat: 100,
      bri: 10,
    },
    {
      startTime: "00:23,120",
      endTime: "00:25,000",
      hue: 240,
      sat: 100,
      bri: 60,
    },
    {
      startTime: "00:25,000",
      endTime: "00:27,000",
      hue: 240,
      sat: 100,
      bri: 70,
    },
    {
      startTime: "00:27,000",
      endTime: "00:32,000",
      hue: 240,
      sat: 100,
      bri: 80,
    },
    {
      startTime: "00:32,000",
      endTime: "00:34,000",
      hue: 240,
      sat: 100,
      bri: 90,
    },
    {
      startTime: "00:34,000",
      endTime: "00:37,000",
      hue: 240,
      sat: 100,
      bri: 80,
    },
    {
      startTime: "00:37,000",
      endTime: "00:39,000",
      hue: 240,
      sat: 100,
      bri: 90,
    },
    {
      startTime: "00:39,000",
      endTime: "00:41,000",
      hue: 240,
      sat: 100,
      bri: 80,
    },
    {
      startTime: "00:41,000",
      endTime: "00:44,000",
      hue: 240,
      sat: 100,
      bri: 90,
    },
    {
      startTime: "00:44,000",
      endTime: "00:46,000",
      hue: 240,
      sat: 100,
      bri: 70,
    },
    {
      startTime: "00:46,000",
      endTime: "00:48,000",
      hue: 240,
      sat: 100,
      bri: 60,
    },
    {
      startTime: "00:48,000",
      endTime: "00:50,000",
      hue: 240,
      sat: 100,
      bri: 50,
    },
    {
      startTime: "00:50,000",
      endTime: "00:52,000",
      hue: 240,
      sat: 100,
      bri: 40,
    },
    {
      startTime: "00:52,000",
      endTime: "00:55,000",
      hue: 240,
      sat: 100,
      bri: 60,
    },
    {
      startTime: "00:55.000",
      endTime: "01:00.000",
      hue: 230,
      sat: 100,
      bri: 90,
    },
    {
      startTime: "01:00.000",
      endTime: "01:02.000",
      hue: 230,
      sat: 100,
      bri: 80,
    },
    {
      startTime: "01:02.000",
      endTime: "01:07.000",
      hue: 230,
      sat: 100,
      bri: 90,
    },
    {
      startTime: "01:07.000",
      endTime: "01:13.000",
      hue: 230,
      sat: 100,
      bri: 50,
    },
    {
      startTime: "01:13.000",
      endTime: "01:15.160",
      hue: 230,
      sat: 100,
      bri: 10,
    },
    {
      startTime: "01:15.160",
      endTime: "01:17.320",
      hue: 230,
      sat: 100,
      bri: 10,
    },
    {
      startTime: "01:17.320",
      endTime: "01:19.500",
      hue: 230,
      sat: 100,
      bri: 10,
    },
    {
      startTime: "01:19.500",
      endTime: "01:21.660",
      hue: 230,
      sat: 100,
      bri: 10,
    },
    {
      startTime: "01:21.660",
      endTime: "01:23.820",
      hue: 230,
      sat: 100,
      bri: 10,
    },
    {
      startTime: "01:23.820",
      endTime: "01:25.980",
      hue: 230,
      sat: 100,
      bri: 10,
    },
    {
      startTime: "01:25.980",
      endTime: "01:28.400",
      hue: 230,
      sat: 100,
      bri: 20,
    },
    {
      startTime: "01:28.400",
      endTime: "01:30.820",
      hue: 230,
      sat: 100,
      bri: 20,
    },
    {
      startTime: "01:30.820",
      endTime: "01:33.320",
      hue: 230,
      sat: 100,
      bri: 30,
    },
    {
      startTime: "01:33.320",
      endTime: "01:35.320",
      hue: 230,
      sat: 100,
      bri: 40,
    },
    {
      startTime: "01:35.320",
      endTime: "01:38.800",
      hue: 230,
      sat: 100,
      bri: 20,
    },
    {
      startTime: "01:39.760",
      endTime: "01:43.760",
      hue: 230,
      sat: 100,
      bri: 10,
    },
    {
      startTime: "01:43.760",
      endTime: "02:06.600",
      hue: 230,
      sat: 100,
      bri: 10,
    },
  ];

  const aBeautifulMindSceneHSB = [
    {
      startTime: "00:00,000",
      endTime: "00:02,000",
      hue: 50,
      sat: 100,
      bri: 20,
    },
    {
      startTime: "00:02,000",
      endTime: "00:03,000",
      hue: 50,
      sat: 100,
      bri: 20,
    },
    {
      startTime: "00:03,000",
      endTime: "00:07,000",
      hue: 50,
      sat: 100,
      bri: 30,
    },
    {
      startTime: "00:07,000",
      endTime: "00:09,000",
      hue: 50,
      sat: 100,
      bri: 30,
    },
    {
      startTime: "00:09,000",
      endTime: "00:14,000",
      hue: 50,
      sat: 100,
      bri: 40,
    },
    {
      startTime: "00:14,000",
      endTime: "00:20,000",
      hue: 50,
      sat: 100,
      bri: 50,
    },
    {
      startTime: "00:20,000",
      endTime: "00:22,000",
      hue: 50,
      sat: 100,
      bri: 50,
    },
    {
      startTime: "00:22,000",
      endTime: "00:25,000",
      hue: 50,
      sat: 100,
      bri: 60,
    },
    {
      startTime: "00:25,000",
      endTime: "00:29,000",
      hue: 50,
      sat: 100,
      bri: 60,
    },
    {
      startTime: "00:29,000",
      endTime: "00:31,800",
      hue: 50,
      sat: 100,
      bri: 70,
    },
    {
      startTime: "00:31,800",
      endTime: "00:33,000",
      hue: 50,
      sat: 100,
      bri: 70,
    },
    {
      startTime: "00:33,000",
      endTime: "00:34,000",
      hue: 50,
      sat: 100,
      bri: 80,
    },
    {
      startTime: "00:34,000",
      endTime: "00:36,000",
      hue: 50,
      sat: 100,
      bri: 80,
    },
    {
      startTime: "00:36,000",
      endTime: "00:38,000",
      hue: 50,
      sat: 100,
      bri: 90,
    },
    {
      startTime: "00:38,000",
      endTime: "00:40,000",
      hue: 50,
      sat: 100,
      bri: 90,
    },
    {
      startTime: "00:40,000",
      endTime: "00:44,000",
      hue: 50,
      sat: 100,
      bri: 100,
    },
    {
      startTime: "00:44,000",
      endTime: "00:45,000",
      hue: 50,
      sat: 100,
      bri: 100,
    },
    {
      startTime: "00:45,000",
      endTime: "00:47,000",
      hue: 50,
      sat: 100,
      bri: 100,
    },
    {
      startTime: "00:47,000",
      endTime: "00:50,000",
      hue: 50,
      sat: 100,
      bri: 100,
    },
    {
      startTime: "00:50,000",
      endTime: "00:51,000",
      hue: 50,
      sat: 100,
      bri: 90,
    },
    {
      startTime: "00:51,000",
      endTime: "00:54,000",
      hue: 50,
      sat: 100,
      bri: 80,
    },
    {
      startTime: "00:54,000",
      endTime: "00:55,000",
      hue: 60,
      sat: 100,
      bri: 30,
    },
    {
      startTime: "00:55,000",
      endTime: "00:56,000",
      hue: 60,
      sat: 100,
      bri: 20,
    },
    {
      startTime: "00:56,000",
      endTime: "00:57,000",
      hue: 50,
      sat: 100,
      bri: 20,
    },
    {
      startTime: "00:57,000",
      endTime: "00:59,400",
      hue: 50,
      sat: 100,
      bri: 20,
    },
    {
      startTime: "00:59,400",
      endTime: "01:00,520",
      hue: 50,
      sat: 100,
      bri: 20,
    },
    {
      startTime: "01:00,520",
      endTime: "01:01,800",
      hue: 50,
      sat: 100,
      bri: 40,
    },
    {
      startTime: "01:01,800",
      endTime: "01:03,240",
      hue: 50,
      sat: 100,
      bri: 60,
    },
    {
      startTime: "01:03,240",
      endTime: "01:04,080",
      hue: 50,
      sat: 100,
      bri: 80,
    },
    {
      startTime: "01:04,080",
      endTime: "01:05,400",
      hue: 50,
      sat: 100,
      bri: 60,
    },
    {
      startTime: "01:05,400",
      endTime: "01:07,200",
      hue: 50,
      sat: 100,
      bri: 20,
    },
    {
      startTime: "01:07,200",
      endTime: "01:09,440",
      hue: 50,
      sat: 100,
      bri: 80,
    },
    {
      startTime: "01:09,440",
      endTime: "01:15,520",
      hue: 50,
      sat: 100,
      bri: 60,
    },
    {
      startTime: "01:15,520",
      endTime: "01:17,080",
      hue: 50,
      sat: 100,
      bri: 80,
    },
    {
      startTime: "01:17,080",
      endTime: "01:19,800",
      hue: 50,
      sat: 100,
      bri: 60,
    },
    {
      startTime: "01:19,800",
      endTime: "01:26,640",
      hue: 50,
      sat: 100,
      bri: 40,
    },
    {
      startTime: "01:26,640",
      endTime: "01:30,320",
      hue: 50,
      sat: 100,
      bri: 20,
    },
    {
      startTime: "01:30,320",
      endTime: "01:33,720",
      hue: 50,
      sat: 100,
      bri: 40,
    },
    {
      startTime: "01:33,720",
      endTime: "01:35,240",
      hue: 50,
      sat: 100,
      bri: 60,
    },
    {
      startTime: "01:35,240",
      endTime: "01:38,440",
      hue: 50,
      sat: 100,
      bri: 80,
    },
    {
      startTime: "01:38,440",
      endTime: "01:42,680",
      hue: 50,
      sat: 100,
      bri: 60,
    },
    {
      startTime: "01:42,680",
      endTime: "01:44,880",
      hue: 50,
      sat: 100,
      bri: 40,
    },
    {
      startTime: "01:44,880",
      endTime: "01:48,440",
      hue: 50,
      sat: 100,
      bri: 20,
    },
    {
      startTime: "01:48,440",
      endTime: "01:49,520",
      hue: 50,
      sat: 100,
      bri: 40,
    },
    {
      startTime: "01:49,520",
      endTime: "01:53,760",
      hue: 50,
      sat: 100,
      bri: 20,
    },
    {
      startTime: "01:53,760",
      endTime: "01:55,760",
      hue: 50,
      sat: 100,
      bri: 20,
    },
    {
      startTime: "01:55,760",
      endTime: "01:57,760",
      hue: 50,
      sat: 100,
      bri: 20,
    },
    {
      startTime: "01:57,760",
      endTime: "02:02,760",
      hue: 50,
      sat: 100,
      bri: 60,
    },
    {
      startTime: "02:02,760",
      endTime: "02:06,760",
      hue: 50,
      sat: 100,
      bri: 60,
    },
    {
      startTime: "02:06,760",
      endTime: "02:09,760",
      hue: 50,
      sat: 100,
      bri: 60,
    },
    {
      startTime: "02:09,760",
      endTime: "02:12,760",
      hue: 50,
      sat: 100,
      bri: 80,
    },
    {
      startTime: "02:12,760",
      endTime: "02:17,760",
      hue: 50,
      sat: 100,
      bri: 80,
    },
    {
      startTime: "02:17,760",
      endTime: "02:19,760",
      hue: 50,
      sat: 100,
      bri: 80,
    },
    {
      startTime: "02:19,760",
      endTime: "02:22,760",
      hue: 50,
      sat: 100,
      bri: 50,
    },
    {
      startTime: "02:22,760",
      endTime: "02:23,600",
      hue: 50,
      sat: 100,
      bri: 20,
    },
    {
      startTime: "02:23,600",
      endTime: "02:25,040",
      hue: 50,
      sat: 100,
      bri: 60,
    },
    {
      startTime: "02:25,040",
      endTime: "02:26,780",
      hue: 50,
      sat: 100,
      bri: 60,
    },
    {
      startTime: "02:26,780",
      endTime: "02:29,120",
      hue: 50,
      sat: 100,
      bri: 40,
    },
    {
      startTime: "02:29,120",
      endTime: "02:29,960",
      hue: 50,
      sat: 100,
      bri: 20,
    },
    {
      startTime: "02:29,960",
      endTime: "02:31,840",
      hue: 50,
      sat: 100,
      bri: 20,
    },
    {
      startTime: "02:31,840",
      endTime: "02:35,760",
      hue: 50,
      sat: 100,
      bri: 80,
    },
    {
      startTime: "02:35,760",
      endTime: "02:38,340",
      hue: 50,
      sat: 100,
      bri: 80,
    },
    {
      startTime: "02:38,340",
      endTime: "02:48,340",
      hue: 50,
      sat: 100,
      bri: 80,
    },
  ];

  const ingloriousBastardsHSB = [
    { startTime: "00:00,000", endTime: "00:07,000", hue: 0, sat: 100, bri: 10 },
    { startTime: "00:07,000", endTime: "00:11,000", hue: 0, sat: 100, bri: 10 },
    { startTime: "00:11,000", endTime: "00:18,000", hue: 0, sat: 100, bri: 20 },
    { startTime: "00:18,000", endTime: "00:22,000", hue: 0, sat: 100, bri: 10 },
    { startTime: "00:22,000", endTime: "00:28,000", hue: 0, sat: 100, bri: 20 },
    { startTime: "00:28,000", endTime: "00:30,000", hue: 0, sat: 100, bri: 30 },
    { startTime: "00:30,000", endTime: "00:37,000", hue: 0, sat: 100, bri: 40 },
    { startTime: "00:37,000", endTime: "00:38,000", hue: 0, sat: 100, bri: 30 },
    { startTime: "00:38,000", endTime: "00:40,000", hue: 0, sat: 100, bri: 40 },
    { startTime: "00:40,000", endTime: "00:45,000", hue: 0, sat: 100, bri: 30 },
    { startTime: "00:45,000", endTime: "00:47,000", hue: 0, sat: 100, bri: 20 },
    { startTime: "00:47,000", endTime: "00:54,000", hue: 0, sat: 100, bri: 50 },
    { startTime: "00:54,000", endTime: "01:02,000", hue: 0, sat: 100, bri: 50 },
    { startTime: "01:02,000", endTime: "01:04,000", hue: 0, sat: 100, bri: 20 },
    { startTime: "01:04,000", endTime: "01:07,000", hue: 0, sat: 100, bri: 40 },
    { startTime: "01:07,000", endTime: "01:11,000", hue: 0, sat: 100, bri: 50 },
    { startTime: "01:12,000", endTime: "01:15,400", hue: 0, sat: 100, bri: 60 },
    { startTime: "01:15,400", endTime: "01:18,000", hue: 0, sat: 100, bri: 70 },
    { startTime: "01:18,000", endTime: "01:20,600", hue: 0, sat: 100, bri: 60 },
    { startTime: "01:20,600", endTime: "01:23,600", hue: 0, sat: 100, bri: 70 },
    { startTime: "01:23,600", endTime: "01:27,200", hue: 0, sat: 100, bri: 60 },
    { startTime: "01:27,200", endTime: "01:28,200", hue: 0, sat: 100, bri: 70 },
    { startTime: "01:28,200", endTime: "01:29,000", hue: 0, sat: 100, bri: 5 },
    { startTime: "01:29,000", endTime: "01:29,800", hue: 0, sat: 100, bri: 0 },
    { startTime: "01:29,800", endTime: "01:31,600", hue: 0, sat: 100, bri: 30 },
    { startTime: "01:31,600", endTime: "01:33,400", hue: 0, sat: 100, bri: 10 },
    { startTime: "01:33,400", endTime: "01:35,000", hue: 0, sat: 100, bri: 15 },
    { startTime: "01:35,000", endTime: "01:37,000", hue: 0, sat: 100, bri: 20 },
    { startTime: "01:37,000", endTime: "01:38,000", hue: 0, sat: 100, bri: 20 },
    { startTime: "01:38,000", endTime: "01:40,000", hue: 0, sat: 100, bri: 20 },
    { startTime: "01:40,000", endTime: "01:42,000", hue: 0, sat: 100, bri: 20 },
    { startTime: "01:42,000", endTime: "01:44,000", hue: 0, sat: 100, bri: 20 },
    { startTime: "02:11,280", endTime: "02:13,280", hue: 0, sat: 100, bri: 20 },
    { startTime: "02:13,280", endTime: "02:20,280", hue: 0, sat: 100, bri: 50 },
    { startTime: "02:20,280", endTime: "02:22,280", hue: 0, sat: 100, bri: 50 },
    { startTime: "02:22,280", endTime: "02:34,280", hue: 0, sat: 100, bri: 10 },
    { startTime: "02:34,280", endTime: "02:39,280", hue: 0, sat: 100, bri: 15 },
    { startTime: "02:40,280", endTime: "02:44,840", hue: 0, sat: 100, bri: 50 },
    { startTime: "02:44,840", endTime: "02:50,680", hue: 0, sat: 100, bri: 35 },
    { startTime: "02:50,680", endTime: "02:53,880", hue: 0, sat: 100, bri: 50 },
    { startTime: "02:53,880", endTime: "02:55,320", hue: 0, sat: 100, bri: 25 },
    { startTime: "02:55,320", endTime: "02:58,400", hue: 0, sat: 100, bri: 50 },
    { startTime: "02:58,400", endTime: "03:08,880", hue: 0, sat: 100, bri: 10 },
    { startTime: "03:08,880", endTime: "03:11,880", hue: 0, sat: 100, bri: 10 },
    { startTime: "03:11,880", endTime: "03:19,880", hue: 0, sat: 100, bri: 60 },
    { startTime: "03:19,880", endTime: "03:23,880", hue: 0, sat: 100, bri: 80 },
    { startTime: "03:23,880", endTime: "03:31,880", hue: 0, sat: 100, bri: 70 },
    { startTime: "03:31,880", endTime: "03:36,880", hue: 0, sat: 100, bri: 50 },
    { startTime: "03:36,880", endTime: "03:40,880", hue: 0, sat: 100, bri: 40 },
    { startTime: "03:40,880", endTime: "03:43,880", hue: 0, sat: 100, bri: 50 },
    { startTime: "03:43,880", endTime: "03:45,880", hue: 0, sat: 100, bri: 30 },
    { startTime: "03:45,880", endTime: "03:49,880", hue: 0, sat: 100, bri: 40 },
    { startTime: "03:49,880", endTime: "03:56,880", hue: 0, sat: 100, bri: 60 },
    { startTime: "03:56,880", endTime: "04:05,880", hue: 0, sat: 100, bri: 50 },
    { startTime: "04:05,880", endTime: "04:09,880", hue: 0, sat: 100, bri: 60 },
    { startTime: "04:09,880", endTime: "04:15,880", hue: 0, sat: 100, bri: 50 },
    { startTime: "04:15,880", endTime: "04:28,880", hue: 0, sat: 100, bri: 70 },
    { startTime: "04:28,880", endTime: "04:31,880", hue: 0, sat: 100, bri: 40 },
    { startTime: "04:31,880", endTime: "04:32,880", hue: 0, sat: 100, bri: 50 },
    { startTime: "04:32,880", endTime: "04:41,120", hue: 0, sat: 100, bri: 60 },
    { startTime: "04:41,120", endTime: "04:45,800", hue: 0, sat: 100, bri: 30 },
    { startTime: "04:45,800", endTime: "04:52,040", hue: 0, sat: 100, bri: 40 },
    { startTime: "04:52,040", endTime: "04:54,560", hue: 0, sat: 100, bri: 50 },
    { startTime: "04:54,560", endTime: "04:58,920", hue: 0, sat: 100, bri: 40 },
    { startTime: "04:58,920", endTime: "05:00,760", hue: 0, sat: 100, bri: 60 },
    { startTime: "05:00,760", endTime: "05:02,760", hue: 0, sat: 100, bri: 40 },
    { startTime: "05:02,760", endTime: "05:07,760", hue: 0, sat: 100, bri: 70 },
    { startTime: "05:07,760", endTime: "05:10,760", hue: 0, sat: 100, bri: 60 },
    { startTime: "05:10,760", endTime: "05:12,760", hue: 0, sat: 100, bri: 80 },
    { startTime: "05:12,760", endTime: "05:14,760", hue: 0, sat: 100, bri: 70 },
    {
      startTime: "05:14,760",
      endTime: "05:32,760",
      hue: 0,
      sat: 100,
      bri: 100,
    },
  ];

  const scenesHSB = [
    brothersSceneHSB,
    aBeautifulMindSceneHSB,
    ingloriousBastardsHSB,
  ];

  function changeColors(i, sceneInt) {
    const h = scenesHSB[sceneInt][i].hue * 182;
    const s = scenesHSB[sceneInt][i].sat * 2.55;
    const b = scenesHSB[sceneInt][i].bri * 2.55;

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

  function playColors(sceneInt) {
    if (i < 1) {
      changeColors(i, sceneInt);
      i++;
    }

    setTimeout(function () {
      console.log(i);
      changeColors(i, sceneInt);
      i++;
      if (i < scenesHSB[sceneInt].length) {
        playColors(sceneInt);
      } else {
        console.log(i);
        i = 0;
      }
    }, 2000);
  }

  return (
    <div className="App">
      <button onClick={() => playColors(0)}>Play Brothers 2009</button>
      <button onClick={() => playColors(1)}>Play A Beautiful Mind</button>
      <button onClick={() => playColors(2)}>Play Inglorious Bastards</button>
      <ReactPlayer
        className="react-player fixed-bottom"
        url="videos/brothers.MP4"
        width="80%"
        height="80%"
        controls={true}
      />
    </div>
  );
}

export default App;
