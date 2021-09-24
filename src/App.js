import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Admin from "./components/Admin";
import Register from "./components/Register";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/admin" component={Admin} />

          <Route path="*">
            <h1>
              {" "}
              Error 404! <br /> Page not found
            </h1>
            d
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
