import { Route, Switch } from "react-router-dom";
import Login from "./components/Login.js";
import Navbar from "./components/Navbar.js";
import Home from "./components/Home.js";
import About from "./components/About.js"
import Map from "./components/Map.js"



function App() {
  return (
    <div className="App">
      <Navbar />

      <Switch>

        <Route exact path="/">
          <Home />
        </Route>
        
        <Route exact path="/Login">
          <Login />
        </Route>
        <Route exact path="/About">
          <About />
        </Route>
        <Route exact path="/Map">
          <Map />
        </Route>


      </Switch>


    </div>
  );
}

export default App;