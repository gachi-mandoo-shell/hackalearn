import React from "react";

const GameImg = ({ image }) => {
  return (
    <div
      style={{
        marginTop: "2rem",
        marginBottom: "2rem",
      }}>
      <img
        alt="cover"
        style={{
          borderRadius: "10px",
          width: "100%",
          height: "400px",
          objectFit: "cover",
        }}
        src={image}
      />
    </div>
  );
};

export default GameImg;
