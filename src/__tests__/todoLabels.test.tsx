/// <reference path="../interfaces.d.ts"/>

import "@testing-library/jest-dom";
import { cleanup, render, screen } from "@testing-library/react";
import * as React from "react";
import { TodoLabels } from "../components/todoLabels";

describe("The <TodoLabels /> Component", () => {
  const defaultTodoLabels = ["travel", "food"];

  beforeEach(() => {
    render(<TodoLabels labels={defaultTodoLabels} />);
  });

  it("Should render the component", () => {
    expect(screen.queryByTestId("badge-container")).toBeDefined();
  });

  it("Should render the todo tags and the user will see it", () => {
    expect(screen.getByText(defaultTodoLabels[0])).toBeInTheDocument();
    expect(screen.getByText(defaultTodoLabels[1])).toBeInTheDocument();
  });

  it("should only render the todo tags passed to it", () => {
    expect(screen.queryAllByTestId("badge")).toHaveLength(2);
  });

  afterEach(cleanup);
});
