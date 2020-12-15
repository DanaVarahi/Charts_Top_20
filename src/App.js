import './App.css';
import { useEffect, useState } from 'react';
import SongList from './components/SongList'
import Header from './components/Header'

function App() {

  const [songs, setSongs] = useState([])

  useEffect(() => {
    fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
          .then(res => res.json())
          .then( songs => setSongs(songs.feed.entry))        
  },[])
  
  return (
    <>
      <Header></Header>
      <SongList tracks={songs}></SongList>
    </>
  );
}

export default App;
