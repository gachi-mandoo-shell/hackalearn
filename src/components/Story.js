import React from "react";

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
          marginTop: "2rem",
          fontSize: "25px",
          fontWeight: "bold",
        }}
      >
        스토리
      </h1>
      <p>{story}</p>
    </div>
  );
};

export default Story;
