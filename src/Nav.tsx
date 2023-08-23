import { ProductBar, ProductBarName, ProductBarTab } from "@sps-woodland/product-bar";
import type { CommercePlatform } from "@spscommerce/services";
import * as React from "react";
import { Link, useHistory } from "react-router-dom";

import { ROUTES } from "./Routes";
import type { Route } from "./Routes";

const navRoutes = ROUTES.filter<Required<Route>>(
  (route): route is Required<Route> => typeof route.nav === "string"
);

interface NavProps {
  platform: CommercePlatform;
}

export function Nav({
  platform,
}: NavProps): React.ReactElement {
  const history = useHistory();
  const initPathname =
    history.location.pathname === "/"
      ? navRoutes[0].path
      : history.location.pathname;
  const [pathname, setPathname] = React.useState<string>(initPathname);

  React.useEffect(
    () =>
      history.listen(() => {
        void platform.updateState();
        setPathname(history.location.pathname);
      }),
    []
  );

  return (
    <ProductBar>
      <ProductBarName name="Company Aggregator" />
      {navRoutes.map((route) => (
        <ProductBarTab
          active={pathname.startsWith(route.path)}
          key={route.path}
          as={Link}
          to={route.path}>
          {route.nav}
        </ProductBarTab>
      ))}
    </ProductBar>
  );
}
