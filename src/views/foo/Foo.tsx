import { SpsDl, SpsDt, SpsDd } from "@spscommerce/ds-react";
import { Card } from "@sps-woodland/cards";
import { PageTitle } from "@sps-woodland/page-title";
import { grid } from "@sps-woodland/tokens";
import * as React from "react";

import type { AppRouteProps } from "../../Routes";

export function Foo({
  env,
  currentUser,
}: AppRouteProps): React.ReactElement {
  return (
    <div className={grid.root}>
      <div className={grid[12]}>
        <PageTitle>Foo View</PageTitle>
      </div>
      <div className={grid[12]}>
        <Card>
          <SpsDl>
            <SpsDt>Environment</SpsDt>
            <SpsDd>{env}</SpsDd>
            <SpsDt>Current user's name</SpsDt>
            <SpsDd>
              {currentUser.first_name} {currentUser.last_name}
            </SpsDd>
          </SpsDl>
        </Card>
      </div>
    </div>
  );
}
