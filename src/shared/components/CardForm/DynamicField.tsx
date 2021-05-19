import React from "react";
import styled from "styled-components";
import { FlexColumn } from "~/shared/theme/flexHelpers";
import { UseFormRegister } from "react-hook-form";

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
  font-size: 13px;
  margin-bottom: var(--gap-sm);
  color: var(--color-gray-600);
`;

export interface Input {
  name: string;
  required?: boolean;
  type: "text" | "checkbox" | "file";
}

const DynamicField = ({
  type,
  name,
  required,
  register,
}: Input & {
  register: UseFormRegister<Record<string, any>>;
}) => {
  const registerConfig = register(name, { required });

  return (
    <Wrapper>
      <Label htmlFor={name}>{name}</Label>

      <input type={type} {...registerConfig} />
    </Wrapper>
  );
};

export default DynamicField;
