import React from "react";
import ReactMarkdown from "react-markdown";
import "../style/markdown.css";

const EndingIntro = ({ endingTopic, endingImage, endingContents }) => {
  return (
    <>
      <div style={{
        width: "40%",
        backgroundColor: "white",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        marginBottom: "25px",
        display: "inline-block",
      }}>
        <img src={endingImage} alt={endingTopic} style={{ width: "100%" }} />
        <div style={{
          textAlign: "center",
          padding: "10px 20px",
        }}>
          <h2 style={{ margin: "0px", fontFamily: "Nanum Myeongjo" }}>{endingTopic}</h2>
        </div>
      </div>
      <div style={{ display: "inline-block", maxWidth: "560px", marginLeft: "40px" }}>
        <h1>소개</h1>
        <ReactMarkdown className="endingIntroduce">
          {endingContents}
        </ReactMarkdown>
      </div>
    </>
  );
};

export default EndingIntro
