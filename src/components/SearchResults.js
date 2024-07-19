import React from 'react'
import data from "../data.js"
import Track from "./Track.js"

export default function SearchResults(props) {
//this logic doesnt work
  function handleClick() {
    data.push((item) => {
      <p>{item}</p>
    })
  }
    const mapped = data.map((item) => {
      return <div key={item.id} className='SearchResultItem'>
        <p style={{fontWeight: 600}}>{item.name}</p>
        <span>{item.artist}</span>
        <span> | {item.album}</span>
        <p>{props.results}</p>
        <button className='addTrackButton' onClick={handleClick}>+</button>
      </div>
    })
    console.log(mapped)
    return (
      <div className="searchResults">
        {mapped}
      </div>
    )
  }