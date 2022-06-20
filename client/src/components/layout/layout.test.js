import { render, screen } from "@testing-library/react";
import Layout from "./layout.js";

// Jest mock to use react-router-dom in this component
const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

describe("<Layout /> component", () => {
  let component;

  beforeEach(() => {
    component = render(<Layout />);
  });

  it("should render the <Layout /> component properly", () => {
    expect(component.container).toBeInTheDocument();
  });

  test("should render the 404 image", () => {
    const logo = screen.getByRole("img");
    expect(logo).toHaveAttribute("src", "404.png");
    expect(logo).toHaveAttribute("alt", "404 page");
  });
});
