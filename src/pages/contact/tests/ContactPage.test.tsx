import { render } from "@testing-library/react";
import ContactPage from "../ContactPage";

describe("it should render", () => {
  test("the snapshot of the <ContactPage /> component", () => {
    const component = render(<ContactPage />);

    expect(component).toMatchSnapshot();
  });
});
