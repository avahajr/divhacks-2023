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
      <section id="home">
        <CollapsibleNavbar name="Jane" />
        <Container>
          <TitleBlock />
          <SearchBar />
        </Container>
      </section>
      <Container>
        <section id="mission">
          <h2 className="bold">Mission</h2>
          <Container className="background-shape-green">
            <p>
              Our mission at Tailor Trade is to combat the ongoing environmental
              damage being perpetuated by clothing waste and the fast fashion
              industry. We also aim to create an accessible fashion-oriented
              marketplace that seeks to eliminate any cost from the process —
              this means no delivery fees, no-cost registration, and no
              transportation fees.
            </p>
          </Container>
          <h3 className="bold">On Clothing Waste and Climate Change</h3>
          <Container className="background-shape-green">
            <p>
              Not much needs to be said about the devastating effects of climate
              change, and the ongoing climate crisis we find ourselves in. We
              have unfortunately all been, in some capacity, direct witness to
              the deterioration of our planet — ongoing habitat destruction,
              weather irregularities and extreme natural disaster, and
              developing food insecurity to name a few. However, what we hope to
              bring to light to is the impact of the fashion industry on climate
              change. <br />
              <br /> Roughly 85% of the clothing thrown away in the United
              States ends up in landfills or burned, a devastating impact that
              forms a sizable chunk of greenhouse gas emissions. And much of
              that waste comes directly from manufacturers themselves, making
              the goal of limiting production and consumption in the fashion
              industry imperative if we hope to curb the effects of climate
              change.
            </p>
          </Container>
        </section>
        <section id="faq">
          <h2 className="bold">Tricks of the Trade</h2>
        </section>
      </Container>
    </>
  );
}

export default App;
