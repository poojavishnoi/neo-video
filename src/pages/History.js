import React from "react";
import { usePlaylist } from "../context/playlist-context";
import { MdDelete } from "../component/";
import "../style/detailedplaylist.css";
import { removeVideoFromHistory, deleteHistory } from "../utilities";

export const History = () => {
  const { history, playlistDispatch } = usePlaylist();
  return (
    <>
      {history.length === 0 ? (
        <img
          src="https://cdn.dribbble.com/users/453325/screenshots/5573953/empty_state.png?compress=1&resize=800x600&vertical=top"
          alt=""
        />
      ) : (
        <>
          <button
            className="btn dlt_history_btn primary_solid_btn"
            onClick={() => deleteHistory(playlistDispatch)}
          >
            Delete history
          </button>
          {history.map(({ _id, title, creator }) => {
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
                      removeVideoFromHistory(_id, playlistDispatch)
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
      )}
    </>
  );
};
