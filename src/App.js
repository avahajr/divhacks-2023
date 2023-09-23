import { Container } from "react-bootstrap";

import "./styles/search.css";
import "./styles/shapes.css";

import CollapsibleNavbar from "./components/CollapsibleNavbar";

import SearchBar from "./components/SearchBar";
import TitleBlock from "./components/TitleBlock";

function App() {
  return (
    <>
      {/* TODO: get props.name from the db*/}
      <CollapsibleNavbar name="Jane" />
      <Container>
        <TitleBlock />
        <SearchBar />

        <h2 id="mission">Mission</h2>
        <Container className="background-shape-green">
          <p>Blah blah blah blah blah</p>
        </Container>
      </Container>
    </>
  );
}

export default App;
