import React from 'react'
import {FaPlay} from 'react-icons/fa';
import {MdWatchLater, CgPlayList} from './'

function VideoCard({data}) {
  return (
    <div className="video_card">
    <img
      className="video_thumbnail"
      src={`https://i.ytimg.com/vi/${data._id}/hq720.jpg?`}
      alt="thumbnail"
    />
    <h3>{data.title}</h3>
    <p>views {data.views}</p>
    <FaPlay className="play_icon" />
    <MdWatchLater className="watchlater_icon" size="25"/>
    <CgPlayList className="playlist_icon" size="35"/>

  </div>
  )
}

export default VideoCard