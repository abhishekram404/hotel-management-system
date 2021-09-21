import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route path="/login" component={Login} />
        <Route path="/" component={Home} />
        <Route path="/home" component={Home} />
      </Router>
    </div>
  );
}

export default App;
