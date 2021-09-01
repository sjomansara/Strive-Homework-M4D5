import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavbar from './Components/MyNavbar';
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  Switch,
  // Link
} from "react-router-dom";
import ShowDetails from "./Components/ShowDetails";
import Home from "./Components/Home";

function App() {
  return (
    <Router>
    <div className="App">
      <MyNavbar />
      <Switch>
      <Route path="/" exact component={Home} />
        <Route path="/ShowDetails" exact component={ShowDetails} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
