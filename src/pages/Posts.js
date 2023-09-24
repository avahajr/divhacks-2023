import React, { useState, useEffect } from "react";

// import CollapsibleNavbar from "../components/CollapsibleNavbar";
import TitleBlock from "../components/TitleBlock";
import SearchBar from "../components/SearchBar";
import PostCard from "../components/PostCard";
import { CardGroup, Container } from "react-bootstrap";

function Posts() {
  const [data, setdata] = useState({
    Name: "",
    User: "",
    Date: "",
    Type: "",
    Descripton: "",
  });
  useEffect(() => {
    // Using fetch to fetch the api from
    // flask server it will be redirected to proxy
    fetch("/data").then((res) =>
      res.json().then((data) => {
        // Setting a data from api
        setdata({
          name: data.Name,
          user: data.User,
          date: data.Date,
          type: data.Type,
          descripton: data.Descripton,
        });
      })
    );
  }, []);
  return (
    <>
      <TitleBlock text="Posts" />
      <SearchBar />
      {/* <br></br> */}
      <Container className="mx-auto" style={{ margin: "10em" }}>
        <CardGroup>
          <PostCard
            itemName={data.Name}
            itemDescription={data.descripton}
            date={data.date}
          />
          <PostCard
            itemName="Mr. Darcy Shirt"
            itemDescription="This shirt has bewitched you, body and soul."
            date={"January 1, 2023"}
          />
          <PostCard
            itemName="Mr. Darcy Shirt"
            itemDescription="This shirt has bewitched you, body and soul."
            date={"January 1, 2023"}
          />
        </CardGroup>
      </Container>
    </>
  );
}

export default Posts;
