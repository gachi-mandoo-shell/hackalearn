import React from "react";

const View = ({ view, tag }) => {
  return (
    <>
      <h1
        style={{
          marginTop: "2rem",
          fontSize: "25px",
          fontWeight: "bold",
        }}
      >
        게임소개
      </h1>
      <p>{tag}</p>
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
