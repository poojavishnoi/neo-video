import React from 'react'
import {usePlaylist} from '../context/playlist-context'
import {deletePlaylist} from '../utilities'
import {Link} from 'react-router-dom'
import {MdPlaylistAdd,MdDelete} from '../component'
import '../style/playlistcard.css'

function PlaylistCard({playlist}) {
  const {videos, _id, title} = playlist;
  const { playlistDispatch} = usePlaylist();
  const img_id = videos.length > 0 ? `${videos[0]._id}` : "Sxjo5MySQFI"
 
  const playlistDeleteHandler = () => {
    deletePlaylist(_id, playlistDispatch)
  }


  return (
    <>
      <div className="playlist_card_container">
      <Link to={`/playlist/${_id}`}>
      <div className="img">
        <img className="playlist_card_img" src={`https://i.ytimg.com/vi/${img_id}/hq720.jpg`} alt=""/>
        
        <div className="add_playlist_icon"><span><MdPlaylistAdd size="50"/>
        <span>{videos.length}</span>
        </span></div>
      
      </div>
      </Link>

      <div className="playlist_card_desc">
        <h3>{title}</h3>
        <button className="dlt_btn" onClick={playlistDeleteHandler}><MdDelete size="30"/></button>
      </div>
      </div>
    </>
  );
}

export  {PlaylistCard}