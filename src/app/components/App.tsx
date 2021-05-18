import React from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";

import Sidebar from "./Sidebar";
import { Domains } from "~/domains";
import { Settings } from "~/settings";

const Wrapper = styled.div`
  height: 100%;
  padding-left: 65px;
`;

const App = () => (
  <Wrapper>
    <Sidebar />

    <Switch>
      <Route path="/settings">
        <Settings />
      </Route>

      <Route path="/">
        <Domains />
      </Route>
    </Switch>
  </Wrapper>
);
export default App;
