import { useReducer, useContext, createContext } from "react";
import {likeReducerFunction} from '../reducer/likeReducerFunction'

const likeContext = createContext(null);

const LikeContextProvider = ({ children }) => {
  // const reducerFunction = (likeState, { type, payload }) => {
  //   switch (type) {
  //     case "LIKE":
  //       let index = likeState.likeList.findIndex(
  //         (ele) => ele._id === payload._id
  //       );
  //       if (index === -1) {
  //         return {
  //           ...likeState,
  //           likeList: [...likeState.likeList, { ...payload }],
  //           likeCount: likeState.likeCount + 1,
  //         };
  //       } else {
  //         return likeState;
  //       }
  //     case "DISLIKE":
  //       return {
  //         ...likeState,
  //         likeList: likeState.likeList.filter((c) => c.id !== payload.id),
  //         likeCount: likeState.likeCount - 1,
  //       };
  //     default:
  //       return { likeState };
  //   }
  // };

  const [{ likeList, likeCount }, likeDispatch] = useReducer(likeReducerFunction, {
    likeList: [],
    likeCount: 0,
  });

  return (
    <likeContext.Provider value={{ likeList, likeCount, likeDispatch }}>
      {children}
    </likeContext.Provider>
  );
};

const useLike = () => useContext(likeContext);

export { useLike, LikeContextProvider };
