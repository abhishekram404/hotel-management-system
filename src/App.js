import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Admin from "./components/Admin";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/login" component={Login} />
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/admin" component={Admin} />

          <Route path="*">
            <h1>
              {" "}
              Error 404! <br /> Page not found
            </h1>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
