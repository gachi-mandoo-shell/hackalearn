import React from "react";
import { Link } from "react-router-dom";
import { Card as AntdCard } from "antd";

const Card = ({ id, image, title, description, place, isLoding = false }) => {
  return (
    <Link to={`/games/${id}`}>
      <AntdCard
        style={{
          display: "inline-block",
          width: "250px",
        }}
        loading={isLoding}
        cover={
          <img
            style={{
              width: "100%",
              height: "160px",
              objectFit: "cover",
            }}
            alt={title}
            src={image}
          />
        }
      >
        <AntdCard.Meta title={`${title}`} description={description} />
        <p
          style={{
            marginTop: "0.5rem",
            marginBottom: "0.5rem",
          }}
        >
          {place}
        </p>
      </AntdCard>
    </Link>
  );
};

export default Card;
