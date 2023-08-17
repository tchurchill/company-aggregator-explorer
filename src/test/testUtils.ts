/* eslint-disable import/export */
import { cleanup, render } from "@testing-library/react";
import type { RenderResult } from "@testing-library/react";
// eslint-disable-next-line @typescript-eslint/no-redeclare
import { afterEach } from "vitest";

afterEach(() => {
  cleanup();
});

function customRender(
  ui: Parameters<typeof render>[0],
  options: Parameters<typeof render>[1] = {},
): RenderResult {
  return render(ui, {
    // wrap provider(s) here if needed
    wrapper: ({ children }) => children,
    ...options,
  });
}

export * from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";
// override render export
export { customRender as render };
