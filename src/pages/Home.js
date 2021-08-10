import React from "react";
import Card from "../components/Card";
import Container from "../components/Container";
import data from "../gamelist.json";

const Home = () => {
  return (
    <Container>
      <h1>Home!</h1>
      {data["서울"].map((game, i) => (
        <Card key={i} title={game.title} />
      ))}
      <Card
        title={"왕의 생일잔치"}
        image={"/img/경복궁.jpeg"}
        description={"왕의 생일잔치를 도와라!"}
        link={"/games/왕의 생일잔치"}
        place={"경복궁"}
      />
    </Container>
  );
};

export default Home;
