import React from "react";
// import CollapsibleNavbar from "../components/CollapsibleNavbar";
import TitleBlock from "../components/TitleBlock";
import SearchBar from "../components/SearchBar";
import PostCard from "../components/PostCard";
import { Container } from "react-bootstrap";

function Posts() {
  return (
    <>
      <TitleBlock text="Posts" />
      <SearchBar />
      {/* <br></br> */}
      <Container style={{ margin: "10em" }}>
        <PostCard
          itemName="Mr. Darcy Shirt"
          itemDescription="This shirt has bewitched you, body and soul. "
        />
      </Container>
    </>
  );
}

export default Posts;
