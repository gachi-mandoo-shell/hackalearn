import React from "react";
import { Layout, Menu, Typography } from "antd";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <Layout.Header>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginLeft: "auto",
          marginRight: "auto",
          width: "100%",
          maxWidth: "1024px",
        }}
      >
        <Typography.Title
          level={3}
          style={{
            marginTop: "auto",
            marginBottom: "auto",
          }}
        >
          <Link
            style={{
              color: "white",
            }}
            to={"/"}
          >
            생생 한국통
          </Link>
        </Typography.Title>
        <Menu theme={"dark"} mode={"horizontal"} selectedKeys={[]}>
          <Menu.Item>
            <Link id={"home"} to={"/"}>
              Home
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link id={"list"} to={"/#list"}>
              List
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link id={"about"} to={"/about"}>
              About
            </Link>
          </Menu.Item>
        </Menu>
      </div>
    </Layout.Header>
  );
};

export default Nav;
