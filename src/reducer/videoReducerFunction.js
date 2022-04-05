export const videoReducerFunction = (videoState, { type, payload }) => {
  switch (type) {
    case "ADD_VIDEO":
      return {
        ...videoState,
        videoList: payload,
      };
    case "ADD_ACOUSTIC":
      return {
        ...videoState,
        acousticList: videoState.videoList.filter(
          (ele) => ele.categoryName === "Acoustic Cover"
        ),
      };
    case "ADD_INDIE":
      return {
        ...videoState,
        indieList: videoState.videoList.filter(
          (ele) => ele.categoryName === "Indie Music"
        ),
      };
    case "ADD_INSTRU":
      return {
        ...videoState,
        instruList: videoState.videoList.filter(
          (ele) => ele.categoryName === "Instrumental Music"
        ),
      };
    default:
      return { videoState };
  }
};
