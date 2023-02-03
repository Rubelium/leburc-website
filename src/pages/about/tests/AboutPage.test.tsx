import { render } from "@testing-library/react";
import AboutPage from "../AboutPage";

describe("it should render", () => {
  test("the snapshot of the <AboutPage /> component", () => {
    const component = render(<AboutPage />);

    expect(component).toMatchSnapshot();
  });
});
