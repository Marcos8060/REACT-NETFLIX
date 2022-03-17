import './App.css';
import requests from './requests';
import Row from './Row';

function App() {
  return (
    <div>
      <h2>Netflix </h2>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>

    </div>
  );
}

export default App;
