import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import NoPage404 from "./components/noPage404/noPage404";
import Layout from "./components/layout/layout";
import CharacterList from "./views/characterList/characterList";
import CharacterDetail from "./views/characterDetail/characterDetail";

function App() {
  return (
    <div className="App">
      <h1>The Rick and Morty App</h1>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<CharacterList />} />
            <Route path="character/:id" element={<CharacterDetail />} />
            <Route path="*" element={<NoPage404 />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}


export default App;
