import React from "react";
import { Layout } from "antd";
import Footer from "./Footer";
import Nav from "./Nav";

const Container = ({ children }) => {
  return (
    <Layout
      theme={"light"}
      style={{
        minHeight: "100vh",
      }}
    >
      <Nav />
      <Layout.Content
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          width: "100%",
          maxWidth: "1024px",
          padding: "8px",
        }}
      >
        {children}
      </Layout.Content>
      <Footer />
    </Layout>
  );
};

export default Container;
