import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import HomePage from "../HomePage";

describe("it should render", () => {
  test("the snapshot of the <HomePage /> component", () => {
    const component = render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );

    expect(component).toMatchSnapshot();
  });
});
