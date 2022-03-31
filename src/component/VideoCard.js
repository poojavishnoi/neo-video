import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { useLike } from "../context/like-context";
import { MdWatchLater, BiLike, AiFillLike } from "./";
import "../style/videoCard.css";

export function VideoCard({ data, liked }) {
  const { likeList, likeDispatch } = useLike();
  const [likedStatus, setLikedStatus] = useState(liked);

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
      <MdWatchLater className="watchlater_icon" size="25" />
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
