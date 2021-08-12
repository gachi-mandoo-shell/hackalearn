import { Button, Modal, notification } from "antd";
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

const ObjectItem = ({ title, script, width, image, onClick }) => {
  const [scriptIndex, setScriptIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <img
        style={{
          width: width,
          objectFit: "contain",
        }}
        src={image}
        alt={title}
        onClick={() => setIsOpen(true)}
      />
      <Modal
        title={script.title}
        width={"720px"}
        visible={isOpen}
        cancelText={false}
        onCancel={() => setIsOpen(false)}
        footer={
          script.description.length === 0
            ? [
                <Button
                  type="primary"
                  onClick={() => {
                    setIsOpen(false);
                    notification.success({
                      message: `${title} 를 획득하였다!`,
                      placement: "bottomRight",
                    });
                    onClick();
                  }}
                >
                  확인
                </Button>,
              ]
            : scriptIndex === script.description.length - 1
            ? [
                <Button
                  type="primary"
                  onClick={() => setScriptIndex(scriptIndex - 1)}
                >
                  이전 페이지
                </Button>,
                <Button
                  type="primary"
                  onClick={() => {
                    setIsOpen(false);
                    notification.success({
                      message: `${title} 를 획득하였다!`,
                      placement: "bottomRight",
                    });
                    onClick();
                  }}
                >
                  확인
                </Button>,
              ]
            : scriptIndex === 0
            ? [
                <Button
                  type="primary"
                  onClick={() => setScriptIndex(scriptIndex + 1)}
                >
                  다음 페이지
                </Button>,
              ]
            : [
                <Button
                  type="primary"
                  onClick={() => setScriptIndex(scriptIndex - 1)}
                >
                  이전 페이지
                </Button>,
                <Button
                  type="primary"
                  onClick={() => setScriptIndex(scriptIndex + 1)}
                >
                  다음 페이지
                </Button>,
              ]
        }
      >
        <ReactMarkdown>{script.description[scriptIndex]}</ReactMarkdown>
      </Modal>
    </>
  );
};

export default ObjectItem;
