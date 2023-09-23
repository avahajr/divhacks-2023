import { Container } from "react-bootstrap";
import CollapsibleNavbar from "./components/CollapsibleNavbar";

import "./styles/search.css";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <>
      <CollapsibleNavbar />
      <Container>
        <SearchBar />
      </Container>
    </>
  );
}

export default App;
