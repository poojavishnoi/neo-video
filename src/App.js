import "./App.css";
import { Header, Footer } from "./component/";
import { Route, Routes } from "react-router-dom";
import { Home, VideoListing, Like} from "./pages/";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videoList" element={<VideoListing />} />
        <Route path="/likedvideos" element={<Like />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
