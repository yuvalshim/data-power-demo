import React from "react";
import styled, { css } from "styled-components";
import {
  FlexColumn,
  FlexMiddle,
  flexColumn,
  flexRow,
  FlexRowSpaceBetween,
} from "~/shared/theme/flexHelpers";
import {
  Headline2,
  Headline3,
  SimpleTextBold,
  SimpleText,
} from "~/shared/theme/typography";

import { Card } from "~/shared/components";
import { SubmittingMask } from "~/shared/theme/styled";
import { ButtonLink, Button } from "~/shared/theme/buttons";

const IconsWrapper = styled(FlexMiddle)`
  gap: 15px;

  svg {
    cursor: pointer;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.3);
    }
  }
`;

const Title = styled(Headline2)`
  padding-left: 15px;
  margin-bottom: 20px;
`;

const DomainsCard = styled(Card)`
  ${flexColumn}
  height: 100%;
  width: 100%;
`;

const ScrollWrapper = styled(FlexColumn)`
  overflow-y: auto;
`;

const ItemsWrapper = styled(FlexColumn)`
  height: auto;
  gap: 5px;
`;

const DomainRow = styled(FlexMiddle)<{ isSelected?: boolean }>`
  cursor: pointer;
  height: 35px;
  padding-left: 15px;
  border-radius: 2px;

  &:hover {
    background-color: hsl(225deg, 25%, 97%);
  }

  ${({ isSelected }) => isSelected && `background-color: hsl(225deg, 80%, 97%)`}
`;

const RowHeader = styled(FlexMiddle)`
  height: 35px;
  padding-left: 15px;
  justify-content: space-between;
`;

const DomainName = styled(SimpleText)``;

const BottomActionsWrapper = styled(FlexRowSpaceBetween)`
  position: absolute;
  right: 35px;
  left: 35px;
  bottom: 35px;
`;

const Total = styled(SimpleTextBold)`
  ${flexRow}
`;

interface DomainsPanelProps {
  title: string;
  items: Array<{ name: string; id: string }>;
  onSubmit: (selectedIs: string[]) => void;
  isSubmitting?: boolean;
}

const DomainsPanel = ({ title, items, onSubmit }: DomainsPanelProps) => {
  const [selectedIds, setSelectedIds] = React.useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const totalSelected = selectedIds.length;

  const isSelected = (id: string) => selectedIds.includes(id);

  const toggleSelectItem = (id: string) => {
    const newIds = isSelected(id)
      ? selectedIds.filter((item) => item !== id)
      : [...selectedIds, id];

    setSelectedIds(newIds);
  };

  const isAllSelected = items.length === selectedIds.length;

  const toggleSelectAll = () =>
    isAllSelected
      ? setSelectedIds([])
      : setSelectedIds(items.map(({ id }) => id));

  const handleOnSubmit = async () => {
    setIsSubmitting(true);
    await onSubmit(selectedIds);

    setSelectedIds([]);
    setIsSubmitting(false);
  };

  return (
    <DomainsCard>
      <Title>{title}</Title>

      <RowHeader>
        <SimpleTextBold>Host Name</SimpleTextBold>

        <IconsWrapper>
          <ButtonLink color="secondary" onClick={toggleSelectAll}>
            {isAllSelected ? "Unselect" : "Select All"}
          </ButtonLink>
        </IconsWrapper>
      </RowHeader>

      <ScrollWrapper>
        <ItemsWrapper>
          {items.map(({ id, name }) => (
            <DomainRow
              key={id}
              isSelected={isSelected(id)}
              onClick={() => toggleSelectItem(id)}
            >
              <DomainName>{name}</DomainName>
            </DomainRow>
          ))}
        </ItemsWrapper>
      </ScrollWrapper>

      <BottomActionsWrapper>
        <Total>
          Total Selected: <Headline3>{totalSelected}</Headline3>
        </Total>

        <Button onClick={handleOnSubmit}>Save</Button>
      </BottomActionsWrapper>

      <SubmittingMask visible={isSubmitting}>Submitting...</SubmittingMask>
    </DomainsCard>
  );
};

export default DomainsPanel;
