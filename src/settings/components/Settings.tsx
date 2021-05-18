import React from "react";
import styled from "styled-components";
import { Page, Card } from "~/shared/components";
import {
  FlexColumn,
  FlexRowSpaceBetween,
  FlexMiddle,
} from "~/shared/theme/flexHelpers";
import { Button } from "~/shared/theme/buttons";
import { SimpleTextBold } from "~/shared/theme/typography";

const CardsWrapper = styled(FlexColumn)`
  gap: var(--gap-xxl);
`;

const FieldsWrapper = styled(FlexRowSpaceBetween)`
  gap: var(--gap-xxl);
`;

const Description = styled(SimpleTextBold)`
  color: var(--color-secondary-900);
  margin-bottom: var(--gap-xl);
`;

const TextInput = styled.input.attrs({
  type: "text",
})`
  height: 35px;
  border: none;
  width: 100%;
  padding-left: var(--gap-md);
  background-color: var(--color-gray-100);
`;

const Footer = styled(FlexMiddle)`
  margin-top: var(--gap-xl);
  justify-content: flex-end;
`;

const Settings = () => {
  return (
    <Page title="Settings">
      <CardsWrapper>
        <Card title="Settings one">
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Description>

          <FieldsWrapper>
            <TextInput name="name" />
            <TextInput name="name" />
            <TextInput name="name" />
          </FieldsWrapper>

          <Footer>
            <Button>Save</Button>
          </Footer>
        </Card>

        <Card title="Settings one">
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Description>

          <FieldsWrapper>
            <TextInput name="name" />
            <TextInput name="name" />
            <TextInput name="name" />
          </FieldsWrapper>

          <Footer>
            <Button>Save</Button>
          </Footer>
        </Card>
      </CardsWrapper>
    </Page>
  );
};

export default Settings;
