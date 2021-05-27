import React from "react";
import styled from "styled-components";
import { FlexRowSpaceBetween } from "~/shared/theme/flexHelpers";
import { Headline3 } from "~/shared/theme/typography";

const Wrapper = styled.div`
  border-radius: 6px;
  background-color: var(--white);
  box-shadow: var(--shadow);
`;

const Header = styled(FlexRowSpaceBetween)`
  height: 45px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  padding-left: var(--gap-xl);
  padding-right: var(--gap-xl);
  border-bottom: 1px solid var(--color-gray-100);
`;

const Title = styled(Headline3)``;

const Content = styled.div`
  height: 100%;
  padding: var(--gap-xl);
`;

interface CardProps {
  title?: string;
  className?: string;
  children: React.ReactNode;
}

const Card = ({ title, className, children }: CardProps) => (
  <Wrapper className={className}>
    {title && (
      <Header>
        <Title>{title}</Title>
      </Header>
    )}

    <Content>{children}</Content>
  </Wrapper>
);

export default Card;
