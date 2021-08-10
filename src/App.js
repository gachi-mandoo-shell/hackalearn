import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Game from "./pages/Game";
import Play from "./pages/Play";
import Ending from "./pages/Ending";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path={"/"} exact>
          <Home />
        </Route>
        <Route path={"/games/:id"} exact>
          <Game />
        </Route>
        <Route path={"/games/:id/play"} exact>
          <Play />
        </Route>
        <Route path={"/games/:id/ending"} exact>
          <Ending />
        </Route>
        <Route path={"/about"} exact>
          <About />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
