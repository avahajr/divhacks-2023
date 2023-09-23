import { Container } from "react-bootstrap";
import CollapsibleNavbar from "./components/CollapsibleNavbar";

import "./styles/search.css";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <>
      {/* TODO: get props.name from the db*/}
      <CollapsibleNavbar name="Jane Barnard" />
      <Container>
        {/* <div className="purpose">Trade your...</div> */}
        <SearchBar />
        <h2 id="mission">Mission</h2>

        <Container className="background-shape">
          <p>Blah blah blah blah blah</p>
        </Container>
      </Container>
    </>
  );
}

export default App;
