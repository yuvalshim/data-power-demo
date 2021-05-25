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
          fields={
            [
              {
                type: "text",
                name: "Token",
                registerOptions: {
                  required: true,
                },
              },
              {
                type: "checkbox",
                name: "Debug",
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
