import React, { useState } from "react";
import styled from "styled-components";
import { Page } from "~/shared/components";
import { FlexRowSpaceBetween } from "~/shared/theme/flexHelpers";
import { Button } from "~/shared/theme/buttons";

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
  grid-template-columns: 1fr 1fr;
`;

const HeaderActions = styled(FlexRowSpaceBetween)`
  gap: var(--gap-md);
  margin-bottom: var(--gap-md);
`;

type ActionType = "deploy" | "remove";

const Domains = () => {
  const [apis, setApis] = useState<
    { id: string; name: string; isDeployed?: boolean }[]
  >(domains);

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

  const onActionClick = async (action: ActionType, selectedIds: string[]) => {
    await sleep(2000);

    if (action === "deploy") toggleDeployedIds(selectedIds, true);

    if (action === "remove") toggleDeployedIds(selectedIds, false);
  };

  return (
    <Page title="Domains">
      <HeaderActions>
        <Button>Show APIs</Button>
      </HeaderActions>

      <PanelsWrapper>
        <DomainsPanel
          title="Apis"
          items={apisItems}
          onSubmit={(selectedIs) => onActionClick("deploy", selectedIs)}
        />

        <DomainsPanel
          title="Deployed"
          items={apisDeployed}
          onSubmit={(selectedIs) => onActionClick("remove", selectedIs)}
        />
      </PanelsWrapper>
    </Page>
  );
};

export default Domains;
