import React from "react";
import { Layout } from "antd";

const Footer = () => {
  return (
    <Layout.Footer
      style={{
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      ©{new Date().getFullYear()}
    </Layout.Footer>
  );
};

export default Footer;
