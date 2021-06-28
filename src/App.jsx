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
import ResumeBuilder from "./ResumeBuilder";
import CareerPathways from "./CareerPathways";
import Tools from "./Tools";
import Resources from './Resources'
import News from './News'
import Artswork from './Artswork'
import About from './About'
import Stories from './Stories'

import ScrollToTop from './helpers/ScrollToTop'
import Post from "./Post";

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
          <Route path="/home" component={Home} />
          <Route path="/tools" component={Tools} />
          <Route path="/career-pathways" component={CareerPathways} />
            <Route path="/skill-identifier" component={SkillIdentifierTool} />
            <Route path="/resume-builder" component={ResumeBuilder} />
          <Route path="/resources" component={Resources} />
          <Route path="/news" component={News} exact/>
          <Route path="/news/:slug" component={Post} />
          <Route path="/artswork" component={Artswork} />
          <Route path="/about" component={About} />
          <Route path="/stories" component={Stories} />
        </Switch>

        
      </div>
      <Footer />
      
    </Router>

  );
}

export default App;
