import {
  useEffect,
  useState,
  useReducer,
  useContext,
  createContext,
} from "react";
import { playlistReducer, playlistTitleReducer } from "../reducer";
import { getPlaylistData } from "../utilities";
const playlistContext = createContext();

const PlaylistProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [{ playlists, history }, playlistDispatch] = useReducer(
    playlistReducer,
    { playlists: [], history: [] }
  );
  const [{ allPlaylistTitle, playlistTitle }, playlistTitleDispatch] =
    useReducer(playlistTitleReducer, {
      allPlaylistTitle: [],
      playlistTitle: [],
    });

  useEffect(() => {
    getPlaylistData(playlistDispatch);
  }, []);
  return (
    <playlistContext.Provider
      value={{
        showModal,
        setShowModal,
        playlists,
        history,
        playlistTitle,
        allPlaylistTitle,
        playlistDispatch,
        playlistTitleDispatch,
      }}
    >
      {children}
    </playlistContext.Provider>
  );
};

const usePlaylist = () => useContext(playlistContext);

export { usePlaylist, PlaylistProvider };
