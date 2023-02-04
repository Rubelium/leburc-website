import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Footer from "../Footer";

describe("it should render", () => {
  test("the snapshot of the <Footer /> component", () => {
    const component = render(
      <BrowserRouter>
        <Footer darkMode />
      </BrowserRouter>
    );

    expect(component).toMatchSnapshot();
  });
});
