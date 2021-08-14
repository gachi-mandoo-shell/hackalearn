import {
  Route,
  BrowserRouter as Router,
  Switch,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import Game from "./pages/Game";
import Play from "./pages/Play";
import Ending from "./pages/Ending";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import React, { useEffect } from "react";
import Debug from "./pages/Debug";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return <React.Fragment />;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
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
        <Route path={"/debug"} exact>
          <Debug />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
