import { render, screen } from "@testing-library/react";
import App from "./App";

import { Provider } from "react-redux";
import store from "./redux/store.js";

describe("<App />", () => {
  let component;

  beforeEach(() => {
    component = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });

  test("should render the <App /> component properly", () => {
    expect(component.container).toBeInTheDocument();
  });

  it("should render the title text", () => {
    expect(screen.getByText(/The Rick and Morty App/i)).toBeInTheDocument();
  });
});
