import { useGrowlers } from "@spscommerce/ds-react";
import type { IdentityUser } from "@spscommerce/services";
import { CommercePlatform } from "@spscommerce/services";
import * as React from "react";
// eslint-disable-next-line @typescript-eslint/no-redeclare
import { describe, it, expect } from "vitest";

import { render } from "../../test/testUtils";
import { Explorer } from "./Explorer";

interface TestFooProps {
  currentUser: IdentityUser;
  commercePlatform: CommercePlatform;
}

const TestFoo: React.FC<TestFooProps> = function TestFoo(props) {
  const { currentUser, commercePlatform } = props;
  const [, createGrowler] = useGrowlers();
  return (
    <Explorer
      currentUser={currentUser}
      env="test"
      platform={commercePlatform}
      createGrowler={createGrowler}
    />
  );
};

describe("Explorer", () => {
  it("renders current user's name", () => {
    const fakeCurrentUser = {
      first_name: "Bob",
      last_name: "Tester",
    };
    const commercePlatform = new CommercePlatform();
    const { getByText } = render(
      <TestFoo
        commercePlatform={commercePlatform}
        currentUser={fakeCurrentUser as unknown as IdentityUser}
      />
    );
    const name = getByText(/Bob Tester/);
    // TODO: figure out if there's a fix for .toBeInTheDocument()
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    expect(name).toBeInTheDocument();
  });
});
