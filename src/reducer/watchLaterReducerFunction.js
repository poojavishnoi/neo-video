export const watchLaterReducerFunction = (watchState, { type, payload }) => {
  switch (type) {
    case "ADD_TO_WATCH_LATER":
      let index = watchState.watchList.findIndex(
        (ele) => ele._id === payload._id
      );
      if (index === -1) {
        return {
          ...watchState,
          watchList: [...watchState.watchList, { ...payload }],
          watchCount: watchState.watchCount + 1,
        };
      } else {
        return watchState;
      }
    case "REMOVE_FROM_WATCH_LATER":
      return {
        ...watchState,
        watchList: watchState.watchList.filter((c) => c.id !== payload.id),
        watchCount: watchState.watchCount - 1,
      };
    default:
      return { watchState };
  }
};
