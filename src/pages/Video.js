import React, { useState, useEffect } from "react";
import { useVideo } from "../context/video-context";
import "../style/video.css";
import { useParams } from "react-router-dom";
import { useLike } from "../context/like-context";
import { usePlaylist } from "../context/playlist-context";
import { useWatchLater } from "../context/watchlater-context";
import { PlaylistModal } from "../component";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export function Video() {
  const { videoList } = useVideo();
  const { likeDispatch } = useLike();
  const { watchDispatch } = useWatchLater();
  const { showModal, setShowModal } = usePlaylist();

  let { _id } = useParams();
  let videoDetails = videoList.find((ele) => ele._id === _id);
  if (!videoDetails) {
    return <Skeleton count={10} />;
  }
  return (
    <>
      {showModal && (
        <PlaylistModal video={videoDetails} key={videoDetails._id} />
      )}
      <div
        className={
          showModal
            ? "video_main_container container_opacity"
            : "video_main_container"
        }
      >
        <iframe
          className="video_iframe"
          src={`https://www.youtube.com/embed/${_id}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div className="video_desc">
          <h1>{videoDetails.title}</h1>
          <h4>{videoDetails.creator}</h4>

          <div className="video_btns">
            <button
              className="btn video_btn primary_solid_btn"
              onClick={() =>
                likeDispatch({ type: "LIKE", payload: videoDetails })
              }
            >
              Like
            </button>
            <button
              className="btn video_btn primary_solid_btn"
              onClick={() =>
                watchDispatch({
                  type: "ADD_TO_WATCH_LATER",
                  payload: videoDetails,
                })
              }
            >
              Watch Later
            </button>
            <button
              className="btn video_btn primary_solid_btn"
              onClick={() => {
                setShowModal(true);
              }}
            >
              Save
            </button>
          </div>
          <h3 className="desc_heading">Description:</h3>
          <h3 className="desc">{videoDetails.description}</h3>
        </div>
      </div>
    </>
  );
}
