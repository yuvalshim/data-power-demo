import React from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";

import Sidebar from "./Sidebar";
import { Domains } from "~/domains";
import { Settings } from "~/settings";

const Wrapper = styled.div`
  --sidebar-width: 65px;
  height: 100%;
  padding-left: var(--sidebar-width);
`;

const App = () => (
  <Wrapper>
    <Sidebar />

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
