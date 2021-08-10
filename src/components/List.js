import React from "react";
import Card from "./Card";
import { Card as AntdCard } from "antd"

const List = ({ data }) => {
  console.log(data[data.location])
  return (
    <>
      <h1>{data.location}</h1>
      <div style={{
        display: "flex",
        gap: "20px",
      }}>
        {data[data.location].map((game) => (
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