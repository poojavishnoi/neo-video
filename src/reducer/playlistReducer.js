export const playlistReducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_PLAYLIST":
      return { ...state, playlists: payload };

    case "ADD_VIDEO_TO_PLAYLIST":
      return {
        ...state,
        playlists: state.playlists.map((playlist) => {
          return playlist._id === payload.playlistId
            ? { ...playlist, videos: [...playlist.videos, payload.video] }
            : playlist;
        }),
      };
    case "REMOVE_PLAYLIST":
      return {
        ...state,
        playlists: state.playlists.filter(({ _id }) => _id !== payload),
      };

    case "REMOVE_VIDEO_FROM_PLAYLIST":
      return {
        ...state,
        playlists: state.playlists.map((playlist) => {
          return playlist._id === payload.playlistId
            ? {
                ...playlist,
                videos: playlist.videos.filter(
                  (video) => video._id !== payload._id
                ),
              }
            : playlist;
        }),
      };
    default:
      return state;
  }
};

export const playlistTitleReducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_PLAYLIST_TITLE":
      return { ...state, allPlaylistTitle: payload };
    case "NEW_PLAYLIST_TITLE":
      return { ...state, playlistTitle: payload };
    default:
      break;
  }
};
