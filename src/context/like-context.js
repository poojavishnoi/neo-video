import { useReducer, useContext, createContext } from "react";
import {likeReducerFunction} from '../reducer/likeReducerFunction'

const likeContext = createContext(null);

const LikeProvider = ({ children }) => {

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

export { useLike, LikeProvider };
