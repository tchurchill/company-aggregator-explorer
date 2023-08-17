import { useGrowlers } from "@spscommerce/ds-react";
import { AppRoot } from "@sps-woodland/core";
import * as React from "react";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import { Nav } from "./Nav";
import type { AppProps } from "./Routes";
import { ROUTES } from "./Routes";

type RouteRenderPropType = ConstructorParameters<typeof Route>[0]["render"];

export function App({
  env,
  platform,
  currentUser,
}: AppProps): React.ReactElement {
  const [growlers, createGrowler] = useGrowlers();

  return (
    <AppRoot>
      {growlers()}
      <Router>
        <Nav platform={platform} />
        <Switch>
          <Route
            exact
            path="/"
            render={(() => <Redirect to={ROUTES[0].path} />) as RouteRenderPropType}
          />

          {ROUTES.map((route, i) => (
            <Route
              key={i}
              exact
              path={route.path}
              render={((routeProps) => (
                <route.Component
                  {...{
                    env,
                    platform,
                    currentUser,
                    createGrowler,
                    ...routeProps,
                  }}
                />
              )) as RouteRenderPropType}
            />
          ))}
        </Switch>
      </Router>
    </AppRoot>
  );
}
