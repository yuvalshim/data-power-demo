import styled from "styled-components";
import { FlexCenter } from "~/shared/theme/flexHelpers";

export const SubmittingMask = styled(FlexCenter)<{ visible: boolean }>`
  z-index: 5;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: var(--white);
  transition: all 0.2s ease-in-out;
  opacity: ${({ visible }) => (visible ? 0.8 : 0)};
  ${({ visible }) => !visible && "pointer-events: none;"}
`;
