import React from "react";
import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";
import { FlexColumn, flexCenter } from "~/shared/theme/flexHelpers";
import LogoPng from "~/shared/assets/logo.png";

import { SettingsOutline } from "@styled-icons/evaicons-outline/SettingsOutline";
import { AltRoute } from "@styled-icons/material/AltRoute";

const Wrapper = styled(FlexColumn)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: var(--sidebar-width);
  background-color: var(--color-secondary);
`;

const Logo = styled.img.attrs({
  src: LogoPng,
})`
  height: 18px;
  width: 18px;
  margin: 26px auto;
`;

const IconTab = styled(NavLink)`
  ${flexCenter}
  width: 100%;
  height: 50px;
  transition: background-color 0.3s ease;

  &.isActive {
    background-color: var(--color-primary-100);
  }

  &:hover:not(.isActive) {
    background-color: var(--color-secondary-100);

    svg {
      transform: scale(1.5);
    }
  }

  svg {
    cursor: pointer;
    transition: transform 0.3s ease;
  }
`;

const iconCss = css`
  height: 22px;
  color: var(--color-gray-200);
`;

const SettingsIcon = styled(SettingsOutline)`
  ${iconCss}
`;

const DomainsIcon = styled(AltRoute)`
  ${iconCss}
`;

const Sidebar = () => (
  <Wrapper>
    <Logo />
    <IconTab to="/settings" activeClassName="isActive">
      <SettingsIcon />
    </IconTab>

    <IconTab to="/domains" activeClassName="isActive">
      <DomainsIcon />
    </IconTab>
  </Wrapper>
);

export default Sidebar;
