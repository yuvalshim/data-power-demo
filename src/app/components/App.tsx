import React from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";

import Sidebar from "./Sidebar";
import { Domains } from "~/domains";
import { Settings } from "~/settings";

const sideBarWidth = 65;

const Wrapper = styled.div`
  height: 100%;
  padding-left: ${sideBarWidth}px;
`;

const App = () => (
  <Wrapper>
    <Sidebar width={sideBarWidth} />

    <Switch>
      <Route path="/settings">
        <Settings />
      </Route>

      <Route path="/domains">
        <Domains />
      </Route>
    </Switch>
  </Wrapper>
);
export default App;
