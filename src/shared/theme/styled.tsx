import styled from "styled-components";
import { FlexCenter } from "~/shared/theme/flexHelpers";
import { Sizes } from "~/shared/theme/GlobalStyle";

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

export const Gap = styled.div<{ size: Sizes }>`
  display: flex;
  gap: ${({ size = "sm" }) => `var(--gap-${size})`};
`;
