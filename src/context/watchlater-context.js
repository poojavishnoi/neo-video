import { useReducer, useContext, createContext } from "react";
import { watchLaterReducerFunction } from "../reducer/watchLaterReducerFunction";

const watchLaterContext = createContext(null);

const WatchLaterProvider = ({ children }) => {
  const [{ watchList, watchCount }, watchDispatch] = useReducer(
    watchLaterReducerFunction,
    {
      watchList: [],
      watchCount: 0,
    }
  );

  return (
    <watchLaterContext.Provider
      value={{ watchList, watchCount, watchDispatch }}
    >
      {children}
    </watchLaterContext.Provider>
  );
};

const useWatchLater = () => useContext(watchLaterContext);

export { useWatchLater, WatchLaterProvider };
