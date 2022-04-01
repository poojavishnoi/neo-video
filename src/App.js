import "./App.css";
import { Header, Footer } from "./component/";
import { Route, Routes } from "react-router-dom";
import { Home, VideoListing, Like, WatchLater } from "./pages/";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videoList" element={<VideoListing />} />
        <Route path="/likedvideos" element={<Like />} />
        <Route path="/watchlater" element={<WatchLater />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
