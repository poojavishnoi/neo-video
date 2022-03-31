export const likeReducerFunction = (likeState, { type, payload }) => {
  switch (type) {
    case "LIKE":
      let index = likeState.likeList.findIndex(
        (ele) => ele._id === payload._id
      );
      if (index === -1) {
        return {
          ...likeState,
          likeList: [...likeState.likeList, { ...payload }],
          likeCount: likeState.likeCount + 1,
        };
      } else {
        return likeState;
      }
    case "DISLIKE":
      return {
        ...likeState,
        likeList: likeState.likeList.filter((c) => c.id !== payload.id),
        likeCount: likeState.likeCount - 1,
      };
    default:
      return { likeState };
  }
};