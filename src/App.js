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
          <p>
            Our mission at Tailor Trade is to combat the ongoing environmental
            damage being perpetuated by clothing waste and the fast fashion
            industry. We also aim to create an accessible fashion-oriented
            marketplace that seeks to eliminate any cost from the process — this
            means no delivery fees, no-cost registration, and no transportation
            fees.
          </p>
        </Container>
      </Container>
    </>
  );
}

export default App;
