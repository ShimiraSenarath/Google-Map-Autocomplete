import './App.css';
import AutocompleteInput from './component/AutocompleteInput';
import SearchResult from './component/SearchResult';
import Map from './component/Map';
import SearchHistory from './component/SearchHistory'

function App() {
  return (
    <div className="App">
      <br/>
      <AutocompleteInput/>
      <br/>
      <SearchResult/>
      <br/>
      <Map/>
      <br/>
      <SearchHistory/>
    </div>
  );
}

export default App;
