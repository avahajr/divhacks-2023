import { Container } from "react-bootstrap";

import "../styles/search.css";
import "../styles/shapes.css";

// import CollapsibleNavbar from "../components/CollapsibleNavbar";

import SearchBar from "../components/SearchBar";
import TitleBlock from "../components/TitleBlock";

function Home() {
  return (
    <>
      {/* TODO: get props.name from the db*/}
      <section id="home">
        <Container>
          <TitleBlock text="Tailor Trade" />
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
        <section id="how-to-swap">
        <h2 className="bold">How To Swap (FAQs)</h2>
          <Container className="background-shape-pink">
            <p>
              <div className="bold">
              List Your Items
                </div>
              <p>
              Set up your profile, and make sure to include your campus! Include 
              the contact information you’re comfortable sharing Make a post! 
              Remember to tag your post as either a clothing item or service.
              </p>
              <div className="bold">
              Start Swapping
                </div>
              <p>
              Find your campus by searching on the home page. You will find all
              listings, clothes or services, for your campus. When you find 
              something you life, you can contact the user who posted and propose a swap. 
              When you find something you like, you can message the user who posted and
              propose a swap.  Once both parties have accepted, you can maintain contact 
              and coordinate your in-person swap.
              </p>
            </p>
          </Container>
        </section>
        <section id="guideline">
          <h2 className="bold"> Guidelines</h2>
          <Container className="background-shape-green">
          <p>
          Do NOT charge any fees: everything is meant to be completely free Please describe
          all possible issues with your listed clothing item (tears, rips, missing buttons,
          etc.) If you are offering a service, include (if possible) images of previous 
          tailoring/upcycling work you have done. Additionally, you are expected to supply 
          tools for tailoring unless the person you are trading with has offered to provide.
          </p>
          </Container>
        </section>
        <section id="faq">
          <h2 className="bold">Tricks of the Trade (FAQs)</h2>
          <Container className="background-shape-pink">
            <br />
            <p>
              <div className="bold">
                Are the clothing/services swaps completely free of charge?
              </div>
              <p>
                Yes! We aim to create a completely free of charge platform. None
                of the traders on this site should be charging you for the swap.
                All swaps are also organized by campus in order to eliminate
                transportation fees. What if I don’t want to accept a swap?
                That’s completely fine! Both parties need to be open to and
                approve of the swap so you can choose to decline and there are
                no hard feelings:)
              </p>
              <div className="bold">
                Can I swap with people from other campuses?
              </div>
              <p>
                We strongly encourage you to not do this (especially if the
                other campus is outside of the city, or state) as we want to
                eliminate any fees included in the clothes sale process,
                including transportation fees. That being said, if you do want
                to engage in a shipping process, you may reach out to the trader
                offering a good or service and request it. However, Tailor Trade
                will not be responsible for managing how fees will be
                distributed for shipping/delivery.{" "}
              </p>
              <div className="bold">
                Can we trade non-clothing related goods and services?
              </div>
              <p>
                {" "}
                No! Tailor Trade is solely focused on serving as an accessible
                and sustainable alternative for manufacturers in the fashion
                industry so no non-clothing related goods and services should be
                on the site. Any posts about non-clothing goods and services
                will be removed from the site. However, there is absolutely a
                chance that Tailor Trade expands to encompass a wide range of
                goods so stay tuned!
              </p>
              <div className="bold">Can we undo a swap after accepting?</div>
              <p>
                {" "}
                After a swap approval has been made by both parties, everything
                is to be organized between the two traders. So, you absolutely
                can undo a swap after accepting though we do not guarantee that
                the other trader will be happy about it and this will have to be
                facilitated between the traders directly! Most importantly, make
                sure that you’re certain before accepting the swap before
                accepting so you can avoid this situation in the first place.
              </p>
              <div className="bold">
                What kinds of services can I post for trade on the site?{" "}
              </div>
              <p>
                Anything clothing-related is appreciated! Some suggestions of
                what kind of service you could offer for trade are: embroidery,
                clothing/shoe repair, cropping, crochet, etc. Tailoring and
                upcycling services are our intended purpose for the services
                option, but don’t feel limited to the listed services here. If
                you have another valuable clothing-related service you think
                others would enjoy feel free to post!
              </p>
            </p>
          </Container>
        </section>
      </Container>
    </>
  );
}

export default Home;
