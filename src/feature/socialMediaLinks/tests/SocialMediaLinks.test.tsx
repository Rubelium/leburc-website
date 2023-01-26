import { render, screen } from "@testing-library/react";
import SocialMediaLinks from "../../socialMediaLinks/SocialMediaLinks";

describe("it should render", () => {
  test("the snapshot of the <SocialMediaLinks /> component", () => {
    const component = render(<SocialMediaLinks />);

    expect(component).toMatchSnapshot();
  });

  test("the social media links", () => {
    render(<SocialMediaLinks />);

    const linkElement = screen.getByText("Social Media Links");

    expect(linkElement).toBeInTheDocument();
  });
});
