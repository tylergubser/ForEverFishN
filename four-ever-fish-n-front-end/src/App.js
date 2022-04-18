import { Route, Switch } from "react-router-dom";
import Login from "./components/Login.js";
import Navbar from "./components/Navbar.js";
import Home from "./components/Home.js";



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


      </Switch>


    </div>
  );
}

export default App;
