import { SpsButton } from "@spscommerce/ds-react";
import { Card } from "@sps-woodland/cards";
import { PageTitle } from "@sps-woodland/page-title";
import { GrowlerKind, ButtonKind, SpsIcon } from "@spscommerce/ds-shared";
import { grid } from "@sps-woodland/tokens";
import * as React from "react";

import type { AppRouteProps } from "../../Routes";

export function Bar({
  createGrowler,
}: AppRouteProps): React.ReactElement {
  function handleClick(): void {
    createGrowler({
      kind: GrowlerKind.SUCCESS,
      title: "Success",
      content: (
        <>
          It's <em>working</em>!
        </>
      ),
    });
  }

  return (
    <div className={grid.root}>
      <div className={grid[12]}>
        <PageTitle>Bar View</PageTitle>
      </div>
      <div className={grid[12]}>
        <Card>
          <SpsButton
            kind={ButtonKind.KEY}
            icon={SpsIcon.BURST_BOLT}
            onClick={handleClick}
          >
            Growl!
          </SpsButton>
        </Card>
      </div>
    </div>
  );
}
