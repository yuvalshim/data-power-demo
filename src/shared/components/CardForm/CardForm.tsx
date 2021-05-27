import * as React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";

import { Card } from "~/shared/components";
import { Button } from "~/shared/theme/buttons";
import { SimpleTextBold } from "~/shared/theme/typography";
import { FlexColumn, FlexMiddle } from "~/shared/theme/flexHelpers";
import DynamicField, { Field, InputsValuesTypes } from "./DynamicField";

const FieldsWrapper = styled(FlexColumn)`
  gap: var(--gap-xxl);
`;

const Description = styled(SimpleTextBold)`
  color: var(--color-gray-700);
  margin-bottom: var(--gap-xl);
`;

const Footer = styled(FlexMiddle)`
  margin-top: var(--gap-xl);
  justify-content: flex-end;
`;

function CardForm<Fields extends readonly Field[]>({
  title,
  description,
  fields,
  onSubmit,
}: {
  title: string;
  description?: string;
  fields: Fields;
  onSubmit: (
    values: {
      [N in Fields[number]["name"]]: InputsValuesTypes[Fields[number]["type"]];
    }
  ) => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { isValid, isDirty },
  } = useForm();

  return (
    <Card title={title}>
      <form onSubmit={handleSubmit(onSubmit as any)}>
        {description && <Description>{description}</Description>}

        <FieldsWrapper>
          {fields.map((fieldConfig) => (
            <DynamicField
              key={fieldConfig.name}
              {...fieldConfig}
              register={register}
            />
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
