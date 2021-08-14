import React from "react";
import { Divider } from 'antd';
import ReactMarkdown from "react-markdown";

const View = ({ view, tag }) => {
  return (
    <>
      <h1
        style={{
          marginTop: "4rem",
          fontSize: "25px",
          fontWeight: "bold",
        }}
      >
        게임소개
        <Divider />
      </h1>
      <ReactMarkdown>{tag}</ReactMarkdown>
      <div
        style={{
          display: "flex",
          overflowX: "auto",
          gap: "20px",
        }}
      >
        {view.map((img) => (
          <img
            alt={img}
            style={{
              marginTop: "1rem",
              width: "720px",
              height: "400px",
              objectFit: "cover",
            }}
            src={img}
          />
        ))}
      </div>
    </>
  );
};

export default View;
