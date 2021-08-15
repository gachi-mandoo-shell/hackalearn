import { Button, Modal } from "antd";
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

const ObjectItem = ({ name, npcName, scripts, width, image, onClick }) => {
  const [scriptIndex, setScriptIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <img
        style={{
          width: "640px",
          objectFit: "contain",
        }}
        src={image}
        alt={name}
        onClick={() => setIsOpen(true)}
      />
      <Modal
        title={npcName}
        width={"720px"}
        visible={isOpen}
        cancelText={false}
        onCancel={() => setIsOpen(false)}
        footer={[
          scriptIndex > 0 && (
            <Button onClick={() => setScriptIndex(scriptIndex - 1)}>
              이전 페이지
            </Button>
          ),
          scriptIndex < scripts.length - 1 && (
            <Button onClick={() => setScriptIndex(scriptIndex + 1)}>
              다음 페이지
            </Button>
          ),
          scriptIndex === scripts.length - 1 && (
            <Button
              type="primary"
              onClick={() => {
                setIsOpen(false);
                onClick();
              }}
            >
              확인
            </Button>
          ),
        ]}
      >
        <ReactMarkdown>{scripts[scriptIndex]}</ReactMarkdown>
      </Modal>
    </>
  );
};

export default ObjectItem;
