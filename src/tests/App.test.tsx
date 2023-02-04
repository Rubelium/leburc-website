import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import App from "../App";

describe("it should render", () => {
  test("the snapshot of the <App /> component", () => {
    const component = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    expect(component).toMatchSnapshot();
  });
});
