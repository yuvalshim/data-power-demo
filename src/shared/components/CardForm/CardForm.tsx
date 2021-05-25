import * as React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";

import { Card } from "~/shared/components";
import { Button } from "~/shared/theme/buttons";
import { SimpleTextBold } from "~/shared/theme/typography";
import { FlexRowSpaceBetween, FlexMiddle } from "~/shared/theme/flexHelpers";
import DynamicField, { Field } from "./DynamicField";

const FieldsWrapper = styled(FlexRowSpaceBetween)`
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

interface SettingsPanelProps {
  title: string;
  description?: string;
  fields: Field[];
  onSubmit: (values: any) => void;
}

// type ParametersRecord<
//   T extends (values: Record<string, any>) => any
// > = T extends (values: infer P) => any ? P : never;

function CardForm({
  title,
  description,
  fields,
  onSubmit,
}: SettingsPanelProps) {
  const {
    register,
    handleSubmit,
    formState: { isValid, isDirty },
  } = useForm();

  return (
    <Card title={title}>
      <form onSubmit={handleSubmit(onSubmit)}>
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
