import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BlogHome from "./pages/BlogHome/BlogHome";
import Landing from "./pages/Landing/Landing";
import Schedule from "./pages/Schedule/Schedule";
import Contact from "./pages/Contact/Contact";

import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/Blog" component={BlogHome} />
          <Route exact path="/Schedule" component={Schedule} />
          <Route exact path="/Contact" component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
