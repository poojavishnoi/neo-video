import "./App.css";
import { Header, Footer } from "./component/";
import { Route, Routes } from "react-router-dom";
import {
  Home,
  VideoListing,
  Like,
  DetailedPlaylist,
  WatchLater,
  Playlist,
  Video,
} from "./pages/";
import MockMan from "mockman-js";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videoList" element={<VideoListing />} />
        <Route path="/likedvideos" element={<Like />} />
        <Route path="/watchlater" element={<WatchLater />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/playlist/:playlistId" element={<DetailedPlaylist />} />
        <Route path="/video/:_id" element={<Video />} />
        <Route path="/mockman" element={<MockMan />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
