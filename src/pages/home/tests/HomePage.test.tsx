import { render } from "@testing-library/react";
import HomePage from "../HomePage";

describe("it should render", () => {
  test("the snapshot of the <HomePage /> component", () => {
    const component = render(<HomePage />);

    expect(component).toMatchSnapshot();
  });
});
