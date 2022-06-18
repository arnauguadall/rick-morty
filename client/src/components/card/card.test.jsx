import { render, screen } from "@testing-library/react";
import Card from "./card.jsx";

describe("<Card /> component", () => {
  let component;

  const props = {
    id: 1,
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "Male",
    origin: {
      name: "Earth (C-137)",
      url: "https://rickandmortyapi.com/api/location/1",
    },
    location: {
      name: "Citadel of Ricks",
      url: "https://rickandmortyapi.com/api/location/3",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    episode: ["https://rickandmortyapi.com/api/episode/1"],
    url: "https://rickandmortyapi.com/api/character/1",
    created: "2017-11-04T18:48:46.250Z",
  };

  beforeEach(() => {
    component = render(<Card character={props} />);
  });

  it("should render the <Card /> component properly", () => {
    expect(component.container).toBeInTheDocument();
  });

  it("should render the character information shown in the card", () => {
    expect(screen.getByText(/Rick Sanchez/i)).toBeInTheDocument();
    expect(screen.getByText(/Citadel of Ricks/i)).toBeInTheDocument();
    expect(screen.getByText(/Alive/i)).toBeInTheDocument();
    expect(screen.getByText(/Human/i)).toBeInTheDocument();
  });

  test('should render the character image', () => {
    const logo = screen.getByRole("img");
    expect(logo).toHaveAttribute(
      "src",
      "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
    );
    expect(logo).toHaveAttribute("alt", "Rick Sanchez character");
  });
});
