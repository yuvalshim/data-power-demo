import * as React from "react";
import styled from "styled-components";
import { useForm, SubmitHandler } from "react-hook-form";

import { Card } from "~/shared/components";
import { Button } from "~/shared/theme/buttons";
import { SimpleTextBold } from "~/shared/theme/typography";
import { FlexRowSpaceBetween, FlexMiddle } from "~/shared/theme/flexHelpers";
import DynamicField, { Input } from "./DynamicField";

const FieldsWrapper = styled(FlexRowSpaceBetween)`
  gap: var(--gap-xxl);
`;

const Description = styled(SimpleTextBold)`
  color: var(--color-gray-900);
  margin-bottom: var(--gap-xl);
`;

const Footer = styled(FlexMiddle)`
  margin-top: var(--gap-xl);
  justify-content: flex-end;
`;

interface SettingsPanelProps<Inputs extends readonly Input[]> {
  title: string;
  description: string;
  inputs: Inputs;
  onSubmit: SubmitHandler<Record<Inputs[number]["name"], any>>;
}

function CardForm<Inputs extends readonly Input[]>({
  title,
  description,
  inputs,
  onSubmit,
}: SettingsPanelProps<Inputs>) {
  const {
    register,
    handleSubmit,
    formState: { isValid, isDirty },
  } = useForm();

  return (
    <Card title={title}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Description>{description}</Description>

        <FieldsWrapper>
          {inputs.map((input) => (
            <DynamicField key={input.name} {...input} register={register} />
          ))}
        </FieldsWrapper>

        <Footer>
          <Button type="submit" disabled={!isValid && !isDirty}>
            Save
          </Button>
        </Footer>
      </form>
    </Card>
  );
}

export default CardForm;
