import { render, screen } from "@testing-library/react";
import App from "../App";

describe("it should render", () => {
  test("the snapshot of the <App /> component", () => {
    const component = render(<App />);

    expect(component).toMatchSnapshot();
  });

  test("the app logo", () => {
    render(<App />);

    const appLogo = screen.getByTestId("appLogo");

    expect(appLogo).toBeInTheDocument();
  });
});
