export const isVideoAlreadyInPlaylist = (
  playlist,
  platlistTitleId,
  videoId
) => {
  return playlist
    .find(({ _id }) => _id === platlistTitleId)
    ?.videos.some(({ _id }) => _id === videoId);
};
