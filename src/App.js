import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import { BrowserRouter, Switch, Route, useHistory } from "react-router-dom";
import Home from "./components/Home";
import Admin from "./components/Admin";
import ProtectedRoute from "./components/ProtectedRoute";
import { useDispatch,  } from "react-redux";
import send_fetch_data_request from "./redux/actions/dashboardActions";
import { useEffect } from "react";
import Cookies from "js-cookie";
import NotFound from "./components/NotFound";
import About from "./components/About";
import Contact from "./components/Contact";
function App() {
  const dispatch = useDispatch();

  const history = useHistory();

  useEffect(() => {
    const isUserLoggedIn = Cookies.get("isUserLoggedIn");

    dispatch({
      type: "SET_FROM_COOKIE",
      payload: isUserLoggedIn,
    });

    dispatch(send_fetch_data_request());
  }, []);
  return (
    <div className="App">
      <BrowserRouter history={history}>
        <Navbar />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute path="/home" component={Home} />
          <ProtectedRoute path="/admin" component={Admin} />
          <Route path="*" exact component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
