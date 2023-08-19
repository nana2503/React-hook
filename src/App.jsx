import "./App.css";
import Navbar from "./views/Navbar/Navbar";
import Form from "./views/Form/Form";
import Home from "./views/Home/Home";
import List from "./views/Todo/List";
import DataCovid from "./views/TableOfCovid/DataCovid";
import Timer from "./views/Timer/Timer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/form">
          <Form />
        </Route>
        <Route path="/todo">
          <List />
        </Route>
        <Route path="/dataCovid">
          <DataCovid />
        </Route>
        <Route path="/timer">
          <Timer />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
