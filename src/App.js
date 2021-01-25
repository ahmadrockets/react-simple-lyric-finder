import './App.css';
import Header from "./component/Header";
import Home from "./pages/Home";
import SongPage from "./pages/SongPage";
import ArtistPage from "./pages/ArtistPage";
import NotFound from "./pages/NotFound";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Header />
          <div className="container">
            <Switch>
              <Route path="/" exact component={Home}></Route>
              <Route path="/song" component={SongPage} exact></Route>
              <Route path="/artist" component={ArtistPage} exact></Route>
              <Route component={NotFound}></Route>
            </Switch>
          </div> 
      </div>
    </BrowserRouter>
  );
}

export default App;
