import { BiCart } from "react-icons/bi";
import { Button, Card, Col, Modal, Row } from "antd";
import React, { useState } from "react";

const Inventory = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        style={{
          position: "absolute",
          top: "5%",
          left: "0",
          zIndex: "100",
        }}
        onClick={() => setIsOpen(true)}
      >
        <BiCart
          style={{
            color: "#424242",
            fontSize: "48px",
            padding: "8px",
            backgroundColor: "#FFF",
            borderTopRightRadius: "4px",
            borderBottomRightRadius: "4px",
          }}
        />
      </div>
      <Modal
        title={"아이템 목록"}
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
        <Row gutter={[8, 8]}>
          {items.length === 0 ? (
            <p>획득한 아이템이 없습니다!</p>
          ) : (
            items.map((item) => (
              <Col span={6}>
                <Card
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  cover={
                    <img
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      src={item.image}
                      alt={item.name}
                    />
                  }
                >
                  <Card.Meta description={item.name} />
                </Card>
              </Col>
            ))
          )}
        </Row>
      </Modal>
    </>
  );
};

export default Inventory;
