import "./styles/search.css";
import "./styles/shapes.css";

import CollapsibleNavbar from "./components/CollapsibleNavbar";

import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Posts from "./pages/Posts";

function App() {
  return (
    <>
      <CollapsibleNavbar name="Jane" />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/posts" Component={Posts} />
      </Routes>
    </>
  );
}

export default App;
