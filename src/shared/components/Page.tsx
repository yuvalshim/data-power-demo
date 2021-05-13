import React from "react";
import styled from "styled-components";

import { Headline1 } from "~/shared/theme/typography";
import { FlexColumn } from "~/shared/theme/flexHelpers";

const MaxWidthWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1100px;
`;

const Wrapper = styled(FlexColumn)`
  height: 100%;
`;

const Header = styled(FlexColumn)`
  padding: var(--gap-xl) 0;
  background-color: var(--white);
  box-shadow: rgb(0 0 0 / 15%) 0px 1px 3px 0px;
`;

const HeaderContent = styled(MaxWidthWrapper)``;

const Title = styled(Headline1)``;

const Content = styled(MaxWidthWrapper)`
  height: 100%;
  padding: var(--gap-xl) 0;
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
