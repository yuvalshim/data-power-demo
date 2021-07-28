import React from "react";
import styled from "styled-components";
import { Page, CardForm } from "~/shared/components";
import { Headline2 } from "~/shared/theme/typography";

const CardsWrapper = styled.div`
  display: grid;
  grid-gap: var(--gap-xl);
  grid-template-columns: repeat(2, 1fr);
`;

const Title = styled(Headline2)`
  color: var(--color-warning);
  margin-bottom: var(--gap-xl);
`;

const Settings = () => {
  return (
    <Page title="Collector Settings">
      <Title>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Title>

      <CardsWrapper>
        <CardForm
          title="Token"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          fields={
            [
              {
                type: "text",
                name: "token",
              },
              {
                type: "checkbox",
                name: "debug",
              },
              {
                type: "file",
                name: "collectorFiles",
              },
            ] as const
          }
          onSubmit={(values) => console.log(values)}
        />

        <CardForm
          title="Collector files"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          fields={
            [
              {
                type: "file",
                name: "CollectorFiles",
              },
            ] as const
          }
          onSubmit={(values) => console.log(values)}
        />
      </CardsWrapper>
    </Page>
  );
};

export default Settings;
