// import { List as AntList } from "antd/lib/form/Form";
import React from "react";
import Container from "../components/Container";
import data from "../gamelist.json";
import List from "../components/List";
import Landing from "../components/Landing";

const Home = () => {
  const filterInfo = (location) => {
    const result = [];
    Object.keys(data.datas).forEach(
      (key) => {
        if (data.datas[key].location === location)
          result.push(
            {
              ...data.datas[key],
              id: key,
            }
          )
      });
    return result
  }
  return (
    <Container>
      <Landing />
      {data.locations.map((location) =>
        <List key={location} location={location}
          data={
            filterInfo(location)
          } />
      )}
    </Container>
  );
};

export default Home;
