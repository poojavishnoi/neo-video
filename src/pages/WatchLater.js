import React from "react";
import "../style/like.css";
import { VideoCard } from "../component/";
import { useWatchLater } from "../context/watchlater-context";

export function WatchLater() {
  const { watchList } = useWatchLater();

  return (
    <>
      {watchList.length === 0 ? (
        <img
          className="img_responsive"
          src="https://cdn.dribbble.com/users/453325/screenshots/5573953/empty_state.png?compress=1&resize=800x600&vertical=top"
          alt=""
        />
      ) : (
        <div className="like_main_container">
          {watchList.map((videoItem) => {
            return (
              <VideoCard key={videoItem._id} watch={true} data={videoItem} />
            );
          })}
        </div>
      )}
    </>
  );
}
