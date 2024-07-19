import React, {useState, useEffect} from "react"
//import data from "./data.js"
import SearchResults from "./components/SearchResults"
import SearchBar from './components/SearchBar'
import Playlist from './components/Playlist'


const API_URL = 'https://api.spotify.com'
function App() {
  const [results, setResults] = useState([])
  const [userInput, setUserInput] = useState('')
  const [playlistInput, setPlaylistInput] = useState('')

  //below is from movie finder and might have same logic / hints
  /*
  const searchSongs = async (title) => {
    const res = await fetch(`${API_URL}&s=$${title}`)
    const data = await res.json();
    setResults(data.Search)
  }
  useEffect(() => {
    searchSongs('')
}, [])
*/

  return (
    <div className="app">
      <div className="search">
        <SearchBar setUserInput={setUserInput} userInput={userInput}/>
      </div>
      <div className="main">
        <SearchResults setResults={setResults} results={results}/>
        <Playlist playlistInput={playlistInput} setPlaylistInput={setPlaylistInput} />
      </div>
    </div>
  );
}

export default App;
