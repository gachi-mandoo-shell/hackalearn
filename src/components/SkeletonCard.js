import React from "react";
import { Card as AntdCard, Skeleton } from "antd";

const SkeletonCard = ({ isLoading }) => {
  // const image = <Skeleton.Image />
  return (
    <AntdCard
      style={{
        display: "inline-block",
        width: "250px",
      }}
      loading={isLoading}
    >
    <Skeleton loading avatar />
    </AntdCard>
  );
}

export default SkeletonCard;
