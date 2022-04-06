import { useReducer, useContext, createContext, useEffect } from "react";
import { videoReducerFunction } from "../reducer/videoReducerFunction";

const videoContext = createContext();

const VideoProvider = ({ children }) => {
  const [{ videoList, acousticList, indieList, instruList }, videoDispatch] =
    useReducer(videoReducerFunction, {
      videoList: [],
      acousticList: [],
      instruList: [],
      indieList: [],
    });

  useEffect(() => {
    async function fetchData() {
      const data = await fetch("/api/videos");
      const result = await data.json();
      videoDispatch({ type: "ADD_VIDEO", payload: result.videos });
      videoDispatch({ type: "ADD_ACOUSTIC", payload: result.videos });
      videoDispatch({ type: "ADD_INDIE", payload: result.videos });
      videoDispatch({ type: "ADD_INSTRU", payload: result.videos });
    }
    fetchData();
  }, []);

  return (
    <videoContext.Provider
      value={{ videoList, acousticList, indieList, instruList, videoDispatch }}
    >
      {children}
    </videoContext.Provider>
  );
};

const useVideo = () => useContext(videoContext);

export { useVideo, VideoProvider };
