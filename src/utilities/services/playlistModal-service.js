import axios from "axios";
import { encodedToken } from "../token";

const getPlaylistData = async (playlistDispatch) => {
  try {
    const { data } = await axios.get("/api/user/playlists", {
      headers: { authorization: encodedToken },
    });
    playlistDispatch({ type: "ADD_PLAYLIST", payload: data.playlists });
  } catch (error) {
    console.log(error);
  }
};

const createPlaylist = async (playlistTitle, playlistDispatch) => {
  try {
    const { data } = await axios.post(
      "/api/user/playlists",
      {
        playlist: { title: playlistTitle },
      },
      {
        headers: { authorization: encodedToken },
      }
    );
    playlistDispatch({ type: "ADD_PLAYLIST", payload: data.playlists });
  } catch (error) {}
};

const deletePlaylist = async (playlistId, playlistDispatch) => {
  try {
    const { data } = await axios.delete(`/api/user/playlists/${playlistId}`, {
      headers: { authorization: encodedToken },
    });
    playlistDispatch({ type: "REMOVE_PLAYLIST", payload: playlistId });
    return data.playlists;
  } catch (error) {
    console.log(error);
  }
};

export { createPlaylist, getPlaylistData, deletePlaylist };
