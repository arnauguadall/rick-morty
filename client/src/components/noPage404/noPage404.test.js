import { render, screen } from "@testing-library/react";
import NoPage404 from "./noPage404.js";

// Jest mock to use react-router-dom in this component
const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

describe("<NoPage404 /> component", () => {
  let component;

  beforeEach(() => {
    component = render(<NoPage404 />);
  });

  it("should render the <NoPage404 /> component properly", () => {
    expect(component.container).toBeInTheDocument();
  });

  test("should render the 404 image", () => {
    const logo = screen.getByRole("img");
    expect(logo).toHaveAttribute("src", "404.png");
    expect(logo).toHaveAttribute("alt", "404 page");
  });
});
