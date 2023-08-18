import { SpsDl, SpsDt, SpsDd } from "@spscommerce/ds-react";
import { Card } from "@sps-woodland/cards";
import { PageTitle } from "@sps-woodland/page-title";
import { grid } from "@sps-woodland/tokens";
import * as React from "react";
import { createGraphiQLFetcher } from '@graphiql/toolkit';
import { GraphiQL } from 'graphiql';
import 'graphiql/graphiql.css';

import type { AppRouteProps } from "../../Routes";

export function Foo({
  env,
  currentUser,
}: AppRouteProps): React.ReactElement {
  const fetcher = createGraphiQLFetcher({ 
    url: 'https://integration.api.sps-internal.com/trading-partner/company-aggregator/v2/graphql',
    headers: {
      Authorization: `Bearer ${sessionStorage.token}`
    }
  });
  return (
      <Card className="default-card">
        <GraphiQL fetcher={fetcher}/>
      </Card>
  );
}
