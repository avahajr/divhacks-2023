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
        <SearchBar />
      </Container>
    </>
  );
}

export default App;
