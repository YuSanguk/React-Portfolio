import React from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import styled from "styled-components";

import Navigator from "./Navigator";

import Landing from "../Router/Landing/Landing";
import Award from "../Router/Awards/Awards";
import Contact from "../Router/Contact/Contact";
import Skill from "../Router/Skills/Skill";
import Portfolio from "../Router/Portfolio/Portfolio";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  margin: 0;
  margin-top: 1em;
  margin-bottom: 0.1em;
  font-size: 2rem;
`;

const SubTitle = styled.h6`
  font-size: 1.5rem;
  margin: 0;
  margin-top: 0.95em;
  margin-bottom: 0.5em;
`;

const TitleEx = styled.p`
  margin: 0;
  margin-bottom: 0.8em;
`;

const AppRouter = () => {
  return (
    <Router>
      <Navigator />
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path="/awards">
          <Award />
        </Route>
        <Route exact path="/contacts">
          <Contact
            Container={Container}
            Title={Title}
            TitleEx={TitleEx}
            SubTitle={SubTitle}
          />
        </Route>
        <Route exact path="/portf">
          <Portfolio Container={Container} Title={Title} />
        </Route>
        <Route exact path="/skill">
          <Skill
            Container={Container}
            Title={Title}
            TitleEx={TitleEx}
            SubTitle={SubTitle}
          />
        </Route>
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
};

export default AppRouter;
