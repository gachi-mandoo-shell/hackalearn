import React from "react";
import { Card as AntdCard, Skeleton } from "antd";

const SkeletonCard = ({ isLoading }) => {
  // const image = <Skeleton.Image />
  return (
    <AntdCard
      style={{
        padding: "0px",
        position: "relative",
        display: "inline-block",
        width: "250px"
      }}
      cover={<Skeleton.Image style={{
        top: 0,
        left: 0,
        width: "250px",
        height: "160px",
      }} />}
    >
      <Skeleton
        title={{
          style: {
            margin: 0,
            marginBottom: 8
          }
        }}
        paragraph={{
          rows: 2,
          style: {
            margin: 0
          }
        }} active />
    </AntdCard>
  );
}

export default SkeletonCard;
