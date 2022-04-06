import axios from "axios";
import { encodedToken } from "../token";

export const addVideoInPlaylist = async (
  video,
  playlistId,
  playlistDispatch
) => {
  try {
    const data = await axios.post(
      `/api/user/playlists/${playlistId}`,
      {
        video,
      },
      {
        headers: { authorization: encodedToken },
      }
    );
    playlistDispatch({
      type: "ADD_VIDEO_TO_PLAYLIST",
      payload: { video, playlistId },
    });
  } catch (error) {
    console.log(error);
  }
};

export const removeVideoFromPlaylist = async (
  _id,
  playlistId,
  playlistDispatch
) => {
  try {
    const data = await axios.delete(
      `/api/user/playlists/${playlistId}/${_id}`,
      {
        headers: { authorization: encodedToken },
      }
    );
    playlistDispatch({
      type: "REMOVE_VIDEO_FROM_PLAYLIST",
      payload: { _id, playlistId },
    });
  } catch (error) {
    console.log(error);
  }
};
