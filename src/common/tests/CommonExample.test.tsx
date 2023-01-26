import { render, screen } from "@testing-library/react";
import CommonExample from "../CommonExample";

describe("it should render", () => {
  test("the snapshot of the <CommonExample /> component", () => {
    const component = render(<CommonExample />);

    expect(component).toMatchSnapshot();
  });

  test("the common example link", () => {
    render(<CommonExample />);

    const linkElement = screen.getByText("Common Example");

    expect(linkElement).toBeInTheDocument();
  });
});
