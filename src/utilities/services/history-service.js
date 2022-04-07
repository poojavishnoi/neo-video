import axios from "axios";
import { encodedToken } from "../token";

export const addVideoInHistory = async (video, playlistDispatch) => {
  try {
    const { data } = await axios.post(
      "/api/user/history",
      {
        video,
      },
      {
        headers: { authorization: encodedToken },
      }
    );
    playlistDispatch({ type: "ADD_HISTORY", payload: data.history });
  } catch (error) {
    console.log(error);
  }
};

export const removeVideoFromHistory = async (videoId, playlistDispatch) => {
  try {
    const { data } = await axios.delete(`/api/user/history/${videoId}`, {
      headers: { authorization: encodedToken },
    });
    playlistDispatch({ type: "ADD_HISTORY", payload: data.history });
  } catch (error) {
    console.log(error);
  }
};

export const deleteHistory = async (playlistDispatch) => {
  try {
    const { data } = await axios.delete(`/api/user/history/all`, {
      headers: { authorization: encodedToken },
    });
    playlistDispatch({ type: "ADD_HISTORY", payload: data.history });
  } catch (error) {
    console.log(error);
  }
};
