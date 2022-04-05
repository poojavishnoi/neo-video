import React, { useState } from "react";
import {
  createPlaylist,
  isVideoAlreadyInPlaylist,
  removeVideoFromPlaylist,
  addVideoInPlaylist,
} from "../utilities/";
import { usePlaylist } from "../context/playlist-context";
import ReactDOM from "react-dom";
import "../style/playlistmodal.css";

export function PlaylistModal({ video }) {
  const [playlistInput, setPlaylistInput] = useState(false);
  const {
    setShowModal,
    playlists,
    playlistTitle,
    playlistDispatch,
    playlistTitleDispatch,
  } = usePlaylist();

  console.log(playlists);
  const playlistTitleHandler = (e) => {
    e.preventDefault();
    createPlaylist(playlistTitle, playlistDispatch);
    setPlaylistInput(false);
  };

  const createListHandler = (e) => {
    setPlaylistInput(true);
  };

  const checkboxHandler = (e, playlistId) => {
    if (e.target.checked) {
      addVideoInPlaylist(video, playlistId, playlistDispatch);
    } else {
      removeVideoFromPlaylist(video._id, playlistId, playlistDispatch);
    }
  };
  return ReactDOM.createPortal(
    <div className="playlist_modal_container">
      <div className="playlist_modal_heading">
        <h3>Save to</h3>
        <button onClick={() => setShowModal(false)} className="modal_close_btn">
          x
        </button>
      </div>

      <div className="playlistname_checkbox">
        <label className="playlist_item">
          <input type="checkbox" name="" id="" />
          Watch Later
          <br />
        </label>
        {playlists.map(({ _id, title }) => {
          return (
            <label className="playlist_item">
              <input
                type="checkbox"
                checked={
                  isVideoAlreadyInPlaylist(playlists, _id, video._id) ?? false
                }
                id={_id}
                onChange={(e) => checkboxHandler(e, _id)}
              />
              {title}

              <br />
            </label>
          );
        })}
      </div>
      {playlistInput && (
        <form onSubmit={(e) => playlistTitleHandler(e)}>
          <div className="modal_input">
            <label>
              Name:
              <input
                className="modal_input"
                onChange={(e) =>
                  playlistTitleDispatch({
                    type: "NEW_PLAYLIST_TITLE",
                    payload: e.target.value,
                  })
                }
                type="text"
              />
            </label>
            <button type="submit">Add</button>
          </div>
        </form>
      )}

      <div>
        <button
          className="btn create_btn primary_solid_btn"
          onClick={(e) => {
            createListHandler(e);
          }}
        >
          create new playlist
        </button>
      </div>
    </div>,
    document.getElementById("modal")
  );
}
