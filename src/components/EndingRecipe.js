import React from "react";
import { Divider } from 'antd';
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm"

const EndingRecipe = ({ data, cookingOrder }) => {
  return (
    <>
      <h1>레시피</h1>
      <div style={{ margin: "10px auto", display: "flex" }}>
        <div style={{ display: "inline-block", flex: "1", width: "30%" }}>
          <h3>재료</h3>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {data}
          </ReactMarkdown>
        </div>
        <div style={{ display: "inline-block", flex: "2", width: "60%" }}>
          <h3>조리순서</h3>
          <ReactMarkdown>
            {cookingOrder}
          </ReactMarkdown>
        </div>
      </div>
    </>
  );
};

export default EndingRecipe;
