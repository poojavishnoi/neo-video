import "../style/header.css";
import { Link } from "react-router-dom";
import {BiSearch,BsClockHistory,AiOutlineUser,AiOutlineLike,MdWatchLater,CgPlayList} from './'

export function Header() {
  return (
    <div className="navigation_main_container">
      <div className="nav_section">
        <div className="burger">
          <i className="fas fa-bars"></i>
        </div>
        <div className="brand_logo">
          <Link to="/">
            <img
              src={
                "https://cdn.pixabay.com/photo/2016/12/07/15/15/lotus-with-hands-1889661_960_720.png"
              }
              alt=""
            />
          </Link>
        </div>
        <div className="brand_title">
          <Link to="/">NeoDev</Link>
        </div>
       
      </div>

      <div className="nav_section">
        <div className="nav_searchbar">
          <span>
            <Link to="/videolist">
              <BiSearch className="search_icon" />
            </Link>
          </span>
          <input className="search_input" type="text" placeholder="Type to search" />
        </div>
        <div className="nav_icons_container ">

        <div className="nav_icon">
            <Link className="nav_icon badge" to="/likedvideos">
              <span>
                <AiOutlineLike size="30" />
              </span>
              <span className="nav_icon_name">Liked Videos</span>
            </Link>
          </div>
        <div className="nav_icon">
            <Link className="nav_icon badge" to="/watchlater">
              <span>
                <MdWatchLater size="30" />
              </span>
              <span className="nav_icon_name">Watch Later</span>
            </Link>
          </div>
       
          <div className="nav_icon">
            <Link className="nav_icon badge" to="/playlist">
              <span>
                <CgPlayList size="30" />
              </span>
              <span className="nav_icon_name">Playlist</span>
            </Link>
          </div>

          <div className="nav_icon">
            <Link className="nav_icon badge" to="/history">
              <span>
                <BsClockHistory size="25" />
              </span>
              <span className="nav_icon_name">History</span>
            </Link>
          </div>

          <div className="nav_icon profile_icon ">
            <Link className="nav_icon " to="/signup">
              <span>
                <AiOutlineUser size="30" />
              </span>

              <span className="nav_icon_name">Profile</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

