import React from "react";
import { Card } from "antd";
import List from "../components/List";

const MainBar = ({ image, view }) => {
  return (
    <div
      style={{
        marginTop: "2rem",
        marginBottom: "2rem",
      }}
    >
      <img
        style={{
          width: "100%",
          height: "400px",
          objectFit: "cover",
        }}
        src={image}
      />
      <h1
        style={{
          marginTop: "2rem",
        }}
      >
        게임소개
      </h1>
	  <p> #서울 #경복궁 #역사 </p>
      <div
        style={{
          marginTop: "2rem",
          marginBottom: "2rem",
          display: "flex",
          overflowX: "auto",
          gap: "20px",
        }}
      >
        {view.map((img) => (
          <img
            style={{
              width: "720px",
              height: "400px",
              objectFit: "cover",
            }}
            src={img}
          />
        ))}
      </div>
      <div
        style={{
          marginTop: "2rem",
          marginBottom: "2rem",
        }}
      >
        <h1
          style={{
            marginTop: "2rem",
          }}
        >
          Story
        </h1>
        <p>게임설명</p>
      </div>
    </div>
  );
};

export default MainBar;
