import React from "react";
import "../style/like.css";
import { VideoCard } from "../component/";
import { useLike } from "../context/like-context";

export function Like() {
  const { likeList } = useLike();

  return (
    <>
      {likeList.length === 0 ? (
        <img src="https://cdn.dribbble.com/users/453325/screenshots/5573953/empty_state.png?compress=1&resize=800x600&vertical=top" alt=""/>
      ) : (
        <div className="like_main_container">
          {likeList.map((videoItem) => {
            return (
              <VideoCard key={videoItem._id} liked={true} data={videoItem} />
            );
          })}
        </div>
      )}
    </>
  );
}
