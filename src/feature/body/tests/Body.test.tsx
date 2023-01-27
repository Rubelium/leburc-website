import { render } from "@testing-library/react";
import Body from "../Body";

describe("it should render", () => {
  test("the snapshot of the <Body /> component", () => {
    const component = render(<Body />);

    expect(component).toMatchSnapshot();
  });
});
