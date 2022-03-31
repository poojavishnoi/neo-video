import React from "react";
import { useEffect, useState } from "react";
import "../style/videolisting.css";
import { VideoCard } from "../component/";

export function VideoListing() {
  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch("/api/videos");
      const result = await data.json();
      setVideoList(result.videos);
    }
    fetchData();
  }, []);
  return (
    <div className="explore_main_container">
      {videoList.map((videoItem) => {
        return <VideoCard watch={false} liked={false} data={videoItem} />;
      })}
    </div>
  );
}
