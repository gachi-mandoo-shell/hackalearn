import React from "react";
import { Divider } from 'antd';
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm"

const EndingRecipe = ({ data, cookingOrder }) => {
  return (
    <>
      <h1>레시피</h1>
      <div style={{ display: "inline-block", maxWidth: "400px"}}>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {data}
      </ReactMarkdown>
      </div>
      <Divider type="vertical" />
      <div style={{ display: "inline-block", maxWidth: "600px", marginLeft: "40px" }}>
        <h3>조리순서</h3>
        <ReactMarkdown>
          {cookingOrder}
        </ReactMarkdown>
      </div>
    </>
  );
};

export default EndingRecipe;
