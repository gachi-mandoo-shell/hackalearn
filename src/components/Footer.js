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
      <p>©{new Date().getFullYear()}  Team.생생한국통</p>
    </Layout.Footer>
  );
};

export default Footer;
