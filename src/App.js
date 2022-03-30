import "./App.css";
import {Header} from './component/Header'
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import {Footer} from "./component/Footer";
import VideoListing from "./pages/VideoListing";
function App() {
  return (
    <div className="App">
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}  />
      <Route path="/videoList" element={<VideoListing/>}  />
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
