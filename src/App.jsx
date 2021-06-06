import "./App.css";
import styled from "styled-components";
import Home from "./Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import SkillIdentifierTool from "./SkillIdentifierTool";

import ScrollToTop from './helpers/ScrollToTop'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        
        <ScrollToTop />
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/Home" component={Home} />
          <Route path="/skill-identifier" component={SkillIdentifierTool} />
        </Switch>

        
      </div>
    </Router>
  );
}

export default App;
