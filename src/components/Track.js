import React from "react"

export default function Track(props) {



    return (
        <div className="TrackContainer">
        {props.name}
        {props.artist}
        {props.album}
        <button className="removeButton">-</button>
        </div>
        
    )
}