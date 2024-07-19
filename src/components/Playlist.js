import React, {useState} from "react"
import Track from "./Track"
//used to add songs to a custom playlist
export default function Playlist(props) {
    //dictates the added songs on the right of the page
    const [addedSongs, setAddedSongs] = useState([])
    function handleClick(e) {
        e.preventDefault() 
        props.setPlaylistInput('')

    }

    function handleChange(e) {
        props.setPlaylistInput  (e.target.value)
    }
    //bottom playlist is where I render <Track /> components
    return (
        <div className="playlistContainer">
            <div className="topPlaylistContainer">
                <input 
                value={props.playlistInput} 
                onChange={handleChange} 
                className="playlistInput" 
                type="text" 
                placeholder="Playlist Name"/>
            </div>
            <div className="bottomPlaylistContainer">
                <Track />
                <Track />
                <Track />
            </div>
            <button className="SavePlaylist" onClick={handleClick}>Save To Spotify</button>
        </div>
    )
}