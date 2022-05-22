import { render, screen } from "@testing-library/react";
import Solana from "../Solana";

describe("it should render", () => {
  test("the snapshot of the <Solana /> component", () => {
    const component = render(<Solana />);

    expect(component).toMatchSnapshot();
  });

  test("the learn react link", () => {
    render(<Solana />);

    const linkElement = screen.getByText("Solana");

    expect(linkElement).toBeInTheDocument();
  });
});
