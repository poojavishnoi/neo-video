import { useContext, createContext, useState } from "react";

const modalContext = createContext();

const ModalProvider = ({ children }) => {
  const [isPlaylistModalVisible, setIsPlaylistVisible] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const togglePlaylistModalVisibility = () => {
    setIsPlaylistVisible(!isPlaylistModalVisible);
  };

  const updateSelectedVideos = (details) => setSelectedVideo(details);

  return (
    <modalContext.Provider
      value={{
        isPlaylistModalVisible,
        selectedVideo,
        togglePlaylistModalVisibility,
        updateSelectedVideos,
      }}
    >
      {children}
    </modalContext.Provider>
  );
};

const useModal = () => useContext(modalContext);

export { useModal, ModalProvider };
