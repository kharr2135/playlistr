import React from "react"
export default function SearchBar(props) {

    function handleChange(e) {
      props.setUserInput(e.target.value)
    }
    function handleClick(e) {
        e.preventDefault() 
        props.setUserInput('')

    }
  
    return (
      <div className="searchBarContainer">
        <input className="searchInput" value={props.userInput} type="text" onChange={handleChange}/>
        <button className="searchButton" onClick={handleClick}>Search</button>
      </div>
    )
  }