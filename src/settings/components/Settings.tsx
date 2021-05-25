import React from "react";
import styled from "styled-components";
import { Page, CardForm } from "~/shared/components";

const CardsWrapper = styled.div`
  display: grid;
  grid-gap: var(--gap-xl);
  grid-template-columns: repeat(2, 1fr);
`;

interface TokenFields {
  Token: string;
  Debug: boolean;
}

interface CollectorFields {
  CollectorFiles: any[];
}

const Settings = () => {
  const onTokenSubmit = (values: TokenFields) => console.log(values);

  const onCollectorSubmit = (values: CollectorFields) => console.log(values);

  return (
    <Page title="Collector Settings">
      <CardsWrapper>
        <CardForm
          title="Token"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          fields={[
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
          ]}
          onSubmit={onTokenSubmit}
        />

        <CardForm
          title="Collector files"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          fields={[
            {
              type: "file",
              name: "CollectorFiles",
            },
          ]}
          onSubmit={onCollectorSubmit}
        />
      </CardsWrapper>
    </Page>
  );
};

export default Settings;
