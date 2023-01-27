import { render } from "@testing-library/react";
import Footer from "../Footer";

describe("it should render", () => {
  test("the snapshot of the <Footer /> component", () => {
    const component = render(<Footer />);

    expect(component).toMatchSnapshot();
  });
});
