import React, { useState } from "react";
import styled from "styled-components";
import { Page } from "~/shared/components";
import {
  FlexColumnCenter,
  FlexRowSpaceBetween,
} from "~/shared/theme/flexHelpers";
import { Button, ArrowButton } from "~/shared/theme/buttons";
import { Gap } from "~/shared/theme/styled";
import DomainsPanel from "./DomainsPanel";

function sleep(timeout: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}

const domains = [
  { id: "dsa", name: "hybrid-api" },
  { id: "dsasad", name: "hybrid-api-test" },
  { id: "dsasadf", name: "api-host-payments" },
  { id: "34sdf", name: "payments" },
  { id: "3324df", name: "payments-xxx" },
  { id: "3sdfdf", name: "user" },
  { id: "43534dfg", name: "system" },
];

const PanelsWrapper = styled.div`
  display: grid;
  height: 100%;
  grid-gap: var(--gap-md);
  max-height: calc(100vh - 175px);
  grid-template-columns: 1fr 100px 1fr;
`;

const HeaderActions = styled(FlexRowSpaceBetween)`
  gap: var(--gap-md);
  margin-bottom: var(--gap-md);
`;

const PanelActions = styled(FlexColumnCenter)`
  gap: var(--gap-md);
`;

type ActionType = "deploy" | "remove";

const Domains = () => {
  const [apis, setApis] = useState<
    { id: string; name: string; isDeployed?: boolean }[]
  >(domains);

  const [actionType, setActionType] = useState<ActionType>();

  const [selectedApisIds, setSelectApisIds] = useState<string[]>([]);
  const [selectedDeployedIds, setDeployedIds] = useState<string[]>([]);

  const toggleDeployedIds = (ids: string[], value: boolean) =>
    setApis((prev) =>
      prev.map((item) =>
        ids.includes(item.id)
          ? {
              ...item,
              isDeployed: value,
            }
          : item
      )
    );

  const apisItems = apis.filter((item) => !item.isDeployed);

  const apisDeployed = apis.filter((item) => item.isDeployed);

  const onActionClick = async (action: ActionType) => {
    setActionType(action);

    await sleep(2000);

    if (action === "deploy") {
      toggleDeployedIds(selectedApisIds, true);
      setSelectApisIds([]);
    }

    if (action === "remove") {
      toggleDeployedIds(selectedDeployedIds, false);
      setDeployedIds([]);
    }

    setActionType(undefined);
  };

  return (
    <Page title="Domains">
      <HeaderActions>
        <Gap size="md">
          <Button>Show APIs</Button>
        </Gap>
      </HeaderActions>

      <PanelsWrapper>
        <DomainsPanel
          title="Apis"
          items={apisItems}
          selectedIds={selectedApisIds}
          setSelectedIds={setSelectApisIds}
          isSubmitting={actionType === "deploy"}
        />

        <PanelActions>
          <ArrowButton
            direction="right"
            disabled={selectedApisIds.length === 0}
            onClick={() => onActionClick("deploy")}
          >
            Deploy
          </ArrowButton>

          <ArrowButton
            direction="left"
            disabled={selectedDeployedIds.length === 0}
            onClick={() => onActionClick("remove")}
          >
            Remove
          </ArrowButton>
        </PanelActions>

        <DomainsPanel
          title="Deployed"
          items={apisDeployed}
          setSelectedIds={setDeployedIds}
          selectedIds={selectedDeployedIds}
          isSubmitting={actionType === "remove"}
        />
      </PanelsWrapper>
    </Page>
  );
};

export default Domains;
