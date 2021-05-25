import React from "react";
import styled from "styled-components";
import { FlexColumn } from "~/shared/theme/flexHelpers";
import { UseFormRegister, RegisterOptions } from "react-hook-form";

const Wrapper = styled(FlexColumn)`
  width: 100%;

  & > input[type="text"] {
    height: 35px;
    border: none;
    width: 100%;
    padding-left: var(--gap-md);
    background-color: var(--color-gray-100);
  }
`;

const Label = styled.label`
  font-size: 12px;
  font-weight: bold;
  margin-bottom: var(--gap-sm);
  color: var(--color-gray-800);
`;

export interface Field {
  name: string;
  type: "text" | "checkbox" | "file";
  registerOptions?: RegisterOptions;
}

const DynamicField = ({
  type,
  name,
  registerOptions,
  register,
}: Field & {
  register: UseFormRegister<Record<string, any>>;
}) => {
  const registerConfig = register(name, registerOptions);

  return (
    <Wrapper>
      <Label htmlFor={name}>{name}</Label>

      <input type={type} {...registerConfig} />
    </Wrapper>
  );
};

export default DynamicField;
