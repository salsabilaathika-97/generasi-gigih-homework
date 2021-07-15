import './App.css';
import data from './Data.js';
import { Album, Artist, Title, Image } from './Components';


function App() {
  return (
    <div className="App">
      <h1>Create Playlist</h1>
        {/* <img src = {data.album.images[0].url} alt = "Queen"/> */}
        <Image url = {data.album.images[0].url} alt = "Queen"/>
        {/* <h3 id = "title">{data.album.name}</h3> */}
        <Title name = {data.album.name}/>
        {/* <h3 id = "artist">{data.album.artists[0].name}</h3> */}
        <Artist name = {data.album.artists[0].name} />
        {/* <h3 id = "album">{data.name}</h3> */}
        <Album name = {data.name}/>
        <button>Select</button>
    </div>
  );
}

export default App;