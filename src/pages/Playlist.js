import React from "react";
import "../style/playlist.css";
import { useNavigate } from "react-router-dom";
import { usePlaylist } from "../context/playlist-context";
import { PlaylistCard } from "../component/";

export function Playlist() {
  const navigate = useNavigate();
  const { playlists } = usePlaylist();
  console.log(playlists);

  return (
    <>
      {playlists.length === 0 ? (
        <img
          src="https://cdn.dribbble.com/users/453325/screenshots/5573953/empty_state.png?compress=1&resize=800x600&vertical=top"
          alt=""
        />
      ) : (
        <div className="playlist_main_container">
          {playlists.map((playlistItem) => {
            return <PlaylistCard playlist={playlistItem} />;
          })}
        </div>
      )}
    </>
  );
}
