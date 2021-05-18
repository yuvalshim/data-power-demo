import React from "react";
import styled from "styled-components";

import { Headline1 } from "~/shared/theme/typography";
import { FlexColumn } from "~/shared/theme/flexHelpers";

const MaxWidthWrapper = styled.div`
  width: 100%;
`;

const Wrapper = styled(FlexColumn)`
  height: 100%;
`;

const Header = styled(FlexColumn)`
  background-color: var(--white);
  box-shadow: var(--shadow-100);
  padding: var(--gap-xl) var(--gap-xxl);
`;

const HeaderContent = styled(MaxWidthWrapper)``;

const Title = styled(Headline1)``;

const Content = styled(MaxWidthWrapper)`
  height: 100%;
  padding: var(--gap-xxl);
`;

interface PageHeaderProps {
  title: string;
  children: React.ReactNode;
}

const Page = ({ title, children }: PageHeaderProps) => (
  <Wrapper>
    <Header>
      <HeaderContent>
        <Title>{title}</Title>
      </HeaderContent>
    </Header>

    <Content>{children}</Content>
  </Wrapper>
);

export default Page;
