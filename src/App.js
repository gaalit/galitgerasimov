import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact></Route>
      </Switch>
    </Router>
  );
}

export default App;
