import React from "react";
import styled, { css } from "styled-components";
import { flexMiddle } from "~/shared/theme/flexHelpers";
import {
  ArrowheadLeftOutline,
  ArrowheadRightOutline,
} from "@styled-icons/evaicons-outline";

export const Button = styled.button<{ disabled?: boolean }>`
  ${flexMiddle}
  border: none;
  cursor: pointer;
  font-size: 12px;
  padding: 0px 20px;
  font-weight: bold;
  line-height: 30px;

  color: var(--white);
  background-color: var(--color-primary);
  transition: background-color 0.3s ease;

  ${({ disabled }) =>
    disabled &&
    css`
      color: var(--color-secondary);
      background-color: var(--bg-color);
    `}
`;

export const ButtonLink = styled.div<{ color?: "main" | "secondary" }>`
  cursor: pointer;
  font-size: 14px;
  text-decoration: underline;
  color: ${({ color = "main" }) => `var(--${color}-color)`};
`;

interface ArrowButtonProps {
  disabled?: boolean;
  onClick?: () => any;
  className?: string;
  children?: React.ReactNode;
  direction: "left" | "right";
}

const ArrowButtonStyled = styled(Button)`
  > svg {
    height: 15px;
  }
`;

export const ArrowButton = ({
  children,
  disabled,
  direction,
  onClick,
  className,
}: ArrowButtonProps) => (
  <ArrowButtonStyled
    onClick={onClick}
    disabled={disabled}
    className={className}
  >
    {direction === "left" && <ArrowheadLeftOutline />}

    {children}

    {direction === "right" && <ArrowheadRightOutline />}
  </ArrowButtonStyled>
);
