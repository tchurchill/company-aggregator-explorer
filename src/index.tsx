import {
  CommercePlatform,
  IdentityService,
  SpsApiService,
} from "@spscommerce/services";
import React from "react";
import { render } from "react-dom";

import { App } from "./App";

import "@spscommerce/ds-styles/index.css";
import "@sps-woodland/core/lib/style.css";
import "@sps-woodland/cards/lib/style.css";
import "@sps-woodland/page-title/lib/style.css";
import "@sps-woodland/product-bar/lib/style.css";

const platform = new CommercePlatform();
platform
  .getEnvironment()
  .then(async (env) => {
    const spsApiService = new SpsApiService();
    const identityService = new IdentityService(spsApiService, env);
    const currentUser = (await identityService.me()).data;

    render(
      <React.StrictMode>
        <App
          {...{
            env,
            platform,
            spsApiService,
            identityService,
            currentUser,
          }}
        />
      </React.StrictMode>,
      document.getElementById("root")
    );
  })
  .catch((err: unknown) => {
    // eslint-disable-next-line no-console
    console.error("Error during initialization:", err);
  });
