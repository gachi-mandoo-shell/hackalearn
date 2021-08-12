import React from "react";
import CardArray from "./CardArray";
import { Divider } from "antd"

const List = ({ location, data }) => {
  return (
    <>
      <Divider orientation="left">{location}</Divider>
      <CardArray data={data} />
      {/* <div style={{
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
      </div> */}
    </>
  );
};

export default List;
