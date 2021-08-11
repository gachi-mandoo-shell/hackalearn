import React from "react";
import Card from "./Card";
import { Card as AntdCard } from "antd"

const List = ({ location, data }) => {
  console.log(data)
  return (
    <>
      <h1>{location}</h1>
      <div style={{
        display: "flex",
        gap: "20px",
      }}>
        {data.map((game) => (
          <Card
            key={game.id}
            id={game.id}
            title={game.title}
            image={game.image}
            description={game.description}
            place={game.place}
          />
        ))}
      </div>
    </>
  );
};

export default List;
