import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import ContactPage from "../ContactPage";

describe("it should render", () => {
  test("the snapshot of the <ContactPage /> component", () => {
    const component = render(
      <BrowserRouter>
        <ContactPage />
      </BrowserRouter>
    );

    expect(component).toMatchSnapshot();
  });
});
