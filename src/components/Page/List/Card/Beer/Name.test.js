import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Name from "./Name";

let container = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("Beer/Name", () => {
  it("renders the name", () => {
    act(() => {
      render(<Name name="This is a test" />, container);
      return undefined;
    });

    expect(container.textContent).toBe("This is a test");
  });
  it("truncates names over 65 chars", () => {
    act(() => {
      render(
        <Name name="this is a very long name this is a very long name this is a very long name this is a very long name" />,
        container
      );
      return undefined;
    });

    expect(container.textContent).toBe(
      "this is a very long name this is a very long name this is a very…"
    );
  });
});
