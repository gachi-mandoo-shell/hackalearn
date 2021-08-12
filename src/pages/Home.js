import React from "react";
import Container from "../components/Container";
import data from "../gamelist.json";
import List from "../components/List";
import Landing from "../components/Landing";
import filterInfo from "../lib/util/filterInfo";

const Home = () => {
  return (
    <Container landing={<Landing />}>
      <div id="list">
        {data.locations.map((location) => (
          <List
            key={location}
            location={location}
            data={filterInfo(data, location)}
          />
        ))}
      </div>
    </Container>
  );
};

export default Home;
