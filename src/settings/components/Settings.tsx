import React from "react";
import styled from "styled-components";
import { Page, CardForm } from "~/shared/components";

const CardsWrapper = styled.div`
  display: grid;
  grid-gap: var(--gap-xl);
  grid-template-columns: repeat(2, 1fr);
`;

const Settings = () => {
  return (
    <Page title="Collector Settings">
      <CardsWrapper>
        <CardForm
          title="Token"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          inputs={
            [
              {
                type: "text",
                name: "token",
                required: true,
              },
              {
                type: "checkbox",
                name: "debug",
              },
            ] as const
          }
          onSubmit={(values) => console.log(values)}
        />

        <CardForm
          title="Collector files"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          inputs={[
            {
              type: "file",
              name: "Collector Files",
            },
          ]}
          onSubmit={(values) => console.log(values)}
        />
      </CardsWrapper>
    </Page>
  );
};

export default Settings;
