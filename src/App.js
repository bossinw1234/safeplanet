import './App.css';
import AppHeader from './components/AppHeader';
import SongItem from './components/SongItem';
import songs from './data/songs';
import SongPost from './components/SongPost';
import { useState } from 'react';
import AppSearch from './AppSearch';
import SearchAppBar from './components/AppBar'; // นำเข้า SearchAppBar

function App() {
  const [selectedSong, setSelectedSong] = useState(null);
  const [searchText, setSearchText] = useState('');

  function onSongClick(theSong) {
    setSelectedSong(theSong);
  }

  function onSongCloseClick() {
    setSelectedSong(null);
  }

  const filteredSong = songs.filter((song) => {
    return song.title.includes(searchText);
  });

  const songElements = filteredSong.map((song, index) => {
    return <SongItem key={index} song={song} onSongClick={onSongClick} />;
  });

  let songPost = null;
  if (!!selectedSong) {
    songPost = <SongPost song={selectedSong} onBgClick={onSongCloseClick} />;
  }

  return (
    <div className="app">
      <AppHeader />
      <SearchAppBar /> {/* เพิ่ม SearchAppBar */}
      <section className="app-section">
        <div className="app-container">
          <AppSearch value={searchText} onValueChange={setSearchText} />
          <div className="app-grid">
            {songElements}
          </div>
        </div>
      </section>

      {songPost}
    </div>
  );
}

export default App;
