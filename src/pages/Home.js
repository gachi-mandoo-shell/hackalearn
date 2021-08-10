// import { List as AntList } from "antd/lib/form/Form";
import React from "react";
import Container from "../components/Container";
import data from "../gamelist.json";
import List from "../components/List";

const Home = () => {
  return (
    <Container>
      {data["locations"].map((data) => (
        <List key={data.location} data={data} />
      ))}
    </Container>
  );
};

export default Home;
