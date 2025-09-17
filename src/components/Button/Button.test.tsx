import { describe, expect, test, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  test("Should render correctly", () => {
    const { getByRole } = render(<Button>Click me!</Button>);

    const button = getByRole("button", { name: "Click me!" });
    expect(button).toBeInTheDocument();
  });

  test("Should handle clicking correctly", () => {
    const handleClickMock = vi.fn();
    const { getByRole } = render(
      <Button onClick={handleClickMock}>Click me!</Button>
    );

    const button = getByRole("button", { name: "Click me!" });
    fireEvent.click(button);

    expect(handleClickMock).toHaveBeenCalled();
  });
});
