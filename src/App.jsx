import "./App.css";
import { useEffect, useState, lazy, Suspense } from "react";
import Home from "./Home";
import Header from "./components/Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import useWindowDimensions from "./helpers/Window";
import ScrollToTop from "./helpers/ScrollToTop";

const SkillIdentifierTool = lazy(() => import("./SkillIdentifierTool"));
const ResumeBuilder = lazy(() => import("./ResumeBuilder"));
const CareerPathways = lazy(() => import("./CareerPathways"));
const Tools = lazy(() => import("./Tools"));
const Resources = lazy(() => import("./Resources"));
const News = lazy(() => import("./News"));
const About = lazy(() => import("./About"));
const Stories = lazy(() => import("./Stories"));
const Post = lazy(() => import("./Post"));
const Employers = lazy(() => import("./Employers"));
const Students = lazy(() => import("./Students"));

function App(props) {
  const [windowWidth, setWindowWidth] = useState(document.body.clientWidth);
  const { width } = useWindowDimensions();

  console.log(props.location);

  useEffect(() => {
    setTimeout(() => {
      setWindowWidth(document.body.clientWidth);
    }, 100);
  }, []);

  useEffect(() => {
    setWindowWidth(document.body.clientWidth);
  }, [width]);

  return (
    <Router>
      <Suspense fallback={<div></div>}>
        <div className="App" style={{ width: windowWidth }}>
          <Header width={width} />

          <ScrollToTop />
          <Switch>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <Route path="/home" component={Home} />
            <Route path="/tools" component={Tools} />
            <Route path="/career-pathways" component={CareerPathways} />
            <Route path="/skill-identifier" component={SkillIdentifierTool} />
            <Route path="/resume-builder" component={ResumeBuilder} />
            <Route path="/resources" component={Resources} />
            <Route path="/news" component={News} exact />
            <Route path="/news/:slug" component={Post} />

            <Route path="/about" component={About} />
            <Route path="/stories" component={Stories} />

            <Route path="/employers" component={Employers} />
            <Route path="/students" component={Students} />
          </Switch>
        </div>
      </Suspense>
    </Router>
  );
}

export default App;
