import React from "react";
import Card from "./Card";
import { Divider } from "antd"

const List = ({ location, data }) => {
  console.log(data)
  return (
    <>
      <Divider orientation="left">{location}</Divider>
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
            isSkeleton={game.isSkeleton}
          />
        ))}
      </div>
    </>
  );
};

export default List;
