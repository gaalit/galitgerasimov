import "./App.css";
import { HashRouter as Router } from "react-router-dom";
import Home from "./components/pages";

function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
