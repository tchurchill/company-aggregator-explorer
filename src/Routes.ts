import type { GrowlerConfig } from "@spscommerce/ds-react";
import type { CommercePlatform, IdentityUser } from "@spscommerce/services";
import type { FC } from "react";
import type { RouteProps } from "react-router-dom";

import { Foo } from "./views/foo/Foo";
import { Bar } from "./views/bar/Bar";

export interface AppProps {
  env: string;
  platform: CommercePlatform;
  currentUser: IdentityUser;
}
export type AppRouteProps = AppProps & RouteProps & {
  createGrowler: (config: GrowlerConfig) => void;
};
export interface Route {
  path: string;
  Component: FC<AppRouteProps>;
  nav?: string;
}

/*
 * Routes with a "nav" property will create a tab on the
 * Product Bar (top-level navigation bar for the app)
 */
export const ROUTES: Route[] = [
  {
    path: "/foo",
    Component: Foo,
    nav: "Foo",
  },
  {
    path: "/bar",
    Component: Bar,
    nav: "Bar",
  },
];
