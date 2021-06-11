import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages";
import ContactSuccess from "./components/ContactSuccess";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact></Route>
        <Route path="/success=true" component={ContactSuccess} exact></Route>
      </Switch>
    </Router>
  );
}

export default App;
