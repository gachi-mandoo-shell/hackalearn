import React from "react";
import { Divider } from "antd";
import ReactMarkdown from "react-markdown";

const Story = ({ story }) => {
  return (
    <div
      style={{
        marginTop: "2rem",
        marginBottom: "2rem",
      }}
    >
      <h1
        style={{
          marginTop: "4rem",
          fontSize: "25px",
          fontWeight: "bold",
        }}
      >
        스토리
        <Divider />
      </h1>
      <ReactMarkdown>{story}</ReactMarkdown>
    </div>
  );
};

export default Story;
