import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import AboutPage from "../AboutPage";

describe("it should render", () => {
  test("the snapshot of the <AboutPage /> component", () => {
    const component = render(
      <BrowserRouter>
        <AboutPage />
      </BrowserRouter>
    );

    expect(component).toMatchSnapshot();
  });
});
