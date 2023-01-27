import { render } from "@testing-library/react";
import App from "../App";

describe("it should render", () => {
  test("the snapshot of the <App /> component", () => {
    const component = render(<App />);

    expect(component).toMatchSnapshot();
  });
});
