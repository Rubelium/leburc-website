import { render } from "@testing-library/react";
import NavBar from "../NavBar";

describe("it should render", () => {
  test("the snapshot of the <NavBar /> component", () => {
    const component = render(<NavBar />);

    expect(component).toMatchSnapshot();
  });
});
