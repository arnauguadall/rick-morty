import { render, screen } from "@testing-library/react";
import Layout from "./layout.js";
import { MemoryRouter } from "react-router-dom"; // our router

// Jest mock to use react-router-dom in this component
const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

describe("<Layout /> component", () => {
  let component;

  beforeEach(() => {
    component = render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    );
  });

  it("should render the <Layout /> component properly", () => {
    expect(component.container).toBeInTheDocument();
  });

  test("should render two option menus available", () => {
    expect(screen.getByText(/Back to characters/i)).toBeInTheDocument();
    expect(screen.getByText(/Create user/i)).toBeInTheDocument();
  });
});
