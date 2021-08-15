import React, { useState } from "react";
import { FiMap } from "react-icons/fi";
import { Button, Modal } from "antd";

const Map = ({ mapSrc }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        style={{
          position: "absolute",
          top: "5%",
          right: "0",
          zIndex: "100",
        }}
        onClick={() => setIsOpen(true)}
      >
        <FiMap
          style={{
            color: "#424242",
            fontSize: "48px",
            padding: "8px",
            backgroundColor: "#FFF",
            borderTopLeftRadius: "4px",
            borderBottomLeftRadius: "4px",
          }}
        />
      </div>
      <Modal
        title={"약도"}
        width={"720px"}
        visible={isOpen}
        cancelText={false}
        onCancel={() => setIsOpen(false)}
        footer={[
          <Button key="submit" type="primary" onClick={() => setIsOpen(false)}>
            확인
          </Button>,
        ]}
      >
        <img
          style={{
            width: "100%",
            objectFit: "contain",
          }}
          src={mapSrc}
          alt="약도"
        />
      </Modal>
    </>
  );
};

export default Map;
