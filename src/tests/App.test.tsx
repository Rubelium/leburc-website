import { render, screen } from "@testing-library/react";
import App from "../App";

describe("it should render", () => {
  test("the snapshot of the <App /> component", () => {
    const component = render(<App />);

    expect(component).toMatchSnapshot();
  });

  test("the social media links", () => {
    render(<App />);

    const soundCloudLinkElement = screen.getByText(/SoundCloud/i);
    const youTubeLinkElement = screen.getByText(/YouTube/i);
    const InstagramLinkElement = screen.getByText(/Instagram/i);
    const TwitterLinkElement = screen.getByText(/Twitter/i);

    expect(soundCloudLinkElement).toBeInTheDocument();
    expect(youTubeLinkElement).toBeInTheDocument();
    expect(InstagramLinkElement).toBeInTheDocument();
    expect(TwitterLinkElement).toBeInTheDocument();
  });
});
