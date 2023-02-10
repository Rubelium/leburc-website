import { render } from "@testing-library/react";
import Header from "../Header";

describe("it should render", () => {
  test("the snapshot of the <Header /> component", () => {
    const component = render(<Header />);

    expect(component).toMatchSnapshot();
  });
});
