import './App.css';
import gif from './Data';
import { Image, Form } from './Components/Giphy';

function App() {
  return (
    <div className="App">
        <h1>Giphy Lite</h1>
        <Image url = {gif.url} alt = "Gif" />
        <Form />
        <button type="button">Tekan saya!</button>
    </div>
  );
}

export default App;