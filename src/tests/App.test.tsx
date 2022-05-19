import { render, screen } from "@testing-library/react";
import App from "../App";

describe("it should render", () => {
  test("the snapshot of the <App /> component", () => {
    const component = render(<App />);

    expect(component).toMatchSnapshot();
  });

  test("the learn react link", () => {
    render(<App />);

    const linkElement = screen.getByText(/learn react/i);

    expect(linkElement).toBeInTheDocument();
  });
});
