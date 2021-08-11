import React from "react";

const View = ({ view }) => {
  return (
    <>
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
          display: "flex",
          overflowX: "auto",
          gap: "20px",
        }}>
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
    </>
  );
};

export default View;
