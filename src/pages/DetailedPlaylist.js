import React from "react";
import { usePlaylist } from "../context/playlist-context";
import { removeVideoFromPlaylist } from "../utilities";
import { useParams } from "react-router-dom";
import { MdDelete } from "../component/";
import "../style/detailedplaylist.css";

function DetailedPlaylist() {
  const { playlists, playlistDispatch } = usePlaylist();
  const { playlistId } = useParams();
  let data = playlists.find((item) => item._id === playlistId);
  let videoList = data.videos;

  return (
    <>
      {videoList.map(({ _id, title, creator }) => {
        return (
          <div className="detailed_playlist_container">
            <img
              className="detailed_playlist_img"
              src={`https://i.ytimg.com/vi/${_id}/hq720.jpg`}
              alt=""
            />

            <div className="detailed_playlist_desc">
              <h3>{title}</h3>
              <h4>{creator}</h4>
              <button
                onClick={() =>
                  removeVideoFromPlaylist(_id, playlistId, playlistDispatch)
                }
                className="dlt_btn"
              >
                <MdDelete size="20" />
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}

export { DetailedPlaylist };
