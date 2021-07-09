import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./container/Home";
import Detail from "./container/Detail";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/detail" exact component={Detail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
