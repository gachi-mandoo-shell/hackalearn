import { Typography } from "antd";
import React from "react";
import "./Landing.css";

const Landing = () => {
  return (
    <div className="landing_image">
      <div
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "1024px",
          alignItems: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <div
          style={{
            marginTop: "30vh",
            marginLeft: "16px",
          }}
        >
          <Typography.Title level={1}>생생 한국통</Typography.Title>
          <Typography.Title level={3}>
            언제 어디서든 게임하듯 즐겁게
          </Typography.Title>
          <Typography.Title level={3}>
            한국의 문화와 풍경을 생생하게
          </Typography.Title>
        </div>
      </div>
    </div>
  );
};

export default Landing;
