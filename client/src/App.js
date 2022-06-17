import "./App.css";

import backgroundImage from "./assets/svg/background.svg";

import CharacterList from "./views/characterList/characterList";

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <h1>The Rick and Morty API</h1>

      <CharacterList />
    </div>
  );
}

export default App;
