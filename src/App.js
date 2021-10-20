import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import BlogHome from "./pages/blogHome";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          {/* <Route exact path="/" component={Landing} /> */}
          <Route exact path="/blog" component={BlogHome} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
