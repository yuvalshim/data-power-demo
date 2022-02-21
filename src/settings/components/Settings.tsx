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
  margin-bottom: var(--gap-xl);
`;

const Settings = () => {
  return (
    <Page title="Collector Settings">
      <Title>Forms with Generic types</Title>

      <CardsWrapper>
        <CardForm
          title="Token"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          fields={
            [
              {
                type: "checkbox",
                name: "debug",
              },
              {
                type: "text",
                name: "hs",
              },
              {
                type: "file",
                name: "swaggers",
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
