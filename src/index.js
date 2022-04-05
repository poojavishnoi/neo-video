import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { makeServer } from "./server";
import { LikeProvider } from "./context/like-context";
import { WatchLaterProvider } from "./context/watchlater-context";
import { VideoProvider } from "./context/video-context";
import { PlaylistProvider } from "./context/playlist-context";
// Call make Server
makeServer();
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <VideoProvider>
        <LikeProvider>
          <WatchLaterProvider>
            <PlaylistProvider>
              <App />
            </PlaylistProvider>
          </WatchLaterProvider>
        </LikeProvider>
      </VideoProvider>
    </Router>
    ,
  </React.StrictMode>
);
