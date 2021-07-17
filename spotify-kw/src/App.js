import "./App.css";
import data from "./Data.js";
import { Album, Artist, Title, Image, RowTable } from "./Components";

function App() {
  return (
    <div className="App">
      <h1>Create Playlist</h1>
      <table id="t01">
        <tr>
          <th>Gambar Album</th>
          <th>Nama Artis</th>
          <th>Nama Album</th>
          <th>Tanggal Rilis</th>
          <th>Total Track</th>
        </tr>
        {data.map((element) => (
          <RowTable
            url={element.album.images[2].url}
            artist_name={element.artists[0].name}
            album_name={element.album.name}
            release_date={element.album.release_date}
            total_tracks={element.album.total_tracks}
          />
        ))}
      </table>
      <button>Select</button>
    </div>
  );
}

export default App;