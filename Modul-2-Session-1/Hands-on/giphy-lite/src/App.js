import './App.css';
import gif from './Data';
import { Image, Form } from './Components/Giphy';

function App() {
  const listing = gif.map(
    img => { 
      if (img.rating == 'g') {
          return <Image url = {img.url}/>
      } else {
          return null
      }
        }
          )
  
  // function Filter(condition){
  //   const rating = condition.rating;
  //     if (rating ) {

  //     }
  // }

  return (
    <div className="App">
        <h1>Giphy Lite</h1>
        {/* <Image url = {gif.url} alt = "Gif" /> */}
        <Form />
        {listing}
        <button type="button">Tekan saya!</button>
    </div>
  );
}

export default App;