import React from "react";
import { Link } from "react-router-dom";
import { Card as AntdCard } from "antd";
import SkeletonCard from "./SkeletonCard";

const Card = ({ id, image, title, description, place, isLoding = false, isSkeleton }) => {
  if (isSkeleton === true)
    return (<SkeletonCard isLoding={isLoding} />);
  else {
    return (
      <Link to={`/games/${id}`}>
        <AntdCard
          style={{
            display: "inline-block",
            width: "250px",
            height: "290px"
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
          <AntdCard.Meta description={place} />
          {/* <p
            style={{
              marginTop: "0.5rem",
              marginBottom: "0.5rem",
            }}
            >
            {place}
          </p> */}
        </AntdCard>
      </Link>
    );
  }
};

export default Card;
