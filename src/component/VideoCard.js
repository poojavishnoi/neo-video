import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { useLike } from "../context/like-context";
import { MdWatchLater, MdOutlineWatchLater, BiLike, AiFillLike } from "./";
import "../style/videoCard.css";
import { useWatchLater } from "../context/watchlater-context";

export function VideoCard({ watch, liked, data }) {
  const { likeDispatch } = useLike();
  const { watchDispatch } = useWatchLater();
  const [likedStatus, setLikedStatus] = useState(liked);
  const [watchLaterStatus, setWatchLater] = useState(watch);

  return (
    <div className="video_card">
      <img
        className="video_thumbnail"
        src={`https://i.ytimg.com/vi/${data._id}/hq720.jpg?`}
        alt="thumbnail"
      />
      <h3>{data.title}</h3>
      <p>views {data.views}</p>
      <FaPlay className="play_icon" />

      {watchLaterStatus ? (
        <MdWatchLater
          onClick={() => {
            setWatchLater(watch);
            watchDispatch({ type: "REMOVE_FROM_WATCH_LATER", payload: data });
          }}
          className="watchlater_icon"
          size="25"
        />
      ) : (
        <MdOutlineWatchLater
          onClick={() => {
            setWatchLater(!watch);
            watchDispatch({ type: "ADD_TO_WATCH_LATER", payload: data });
          }}
          className="watchlater_icon"
          size="25"
        />
      )}
      {likedStatus ? (
        <AiFillLike
          className="playlist_icon"
          size="30"
          onClick={() => {
            setLikedStatus(liked);
            likeDispatch({ type: "DISLIKE", payload: data });
          }}
        />
      ) : (
        <BiLike
          className="playlist_icon"
          size="30"
          onClick={() => {
            setLikedStatus(!liked);
            likeDispatch({ type: "LIKE", payload: data });
          }}
        />
      )}
    </div>
  );
}
