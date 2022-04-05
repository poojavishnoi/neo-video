import React from "react";
import { useEffect, useState } from "react";
import "../style/videolisting.css";
import { VideoCard } from "../component/";
import { useVideo } from "../context/video-context";

export function VideoListing() {
  const {videoList} = useVideo();

  return (
    <div className="explore_main_container">
      {videoList.map((videoItem) => {
        return <VideoCard videoList={videoList} watch={false} liked={false} data={videoItem} />;
      })}
    </div>
  );
}
