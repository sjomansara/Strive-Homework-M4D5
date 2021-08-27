import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import RowComponent from "./components/RowComponent";

function App() {
  return (
    <div className="App">
      <RowComponent movie="Harry Potter" />
      <RowComponent movie="Lord Of The Rings" />
      <RowComponent movie="Mission Impossible" />
    </div>
  );
}

export default App;
