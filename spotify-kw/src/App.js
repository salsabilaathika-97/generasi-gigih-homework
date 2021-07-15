import './App.css';
import data from './Data.js';

function App() {
  return (
    <div className="App">
      <h1>Create Playlist</h1>
        <img src = {data.album.images[0].url} alt = "Queen"/>
        <h3 id = "title">{data.album.name}</h3>
        <h3 id = "artist">{data.album.artists[0].name}</h3>
        <h3 id = "album">{data.name}</h3>
        <button>Select</button>
    </div>
  );
}

export default App;