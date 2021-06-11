import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages";
import ContactPage from "./components/pages-contact";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact></Route>
        <Route path="/success=true" component={ContactPage} exact></Route>
      </Switch>
    </Router>
  );
}

export default App;
