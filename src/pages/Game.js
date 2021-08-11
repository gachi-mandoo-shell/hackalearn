import React from "react";
import { useParams } from "react-router-dom";
import Container from "../components/Container";
import GameImg from "../components/GameImg";
import Story from "../components/Story";
import View from "../components/View";
import SideBar from "../components/SideBar";
import data from "../gamelist.json";
import NotFound from "./NotFound";
import { Row, Col } from 'antd';

const Game = () => {
  const { id } = useParams();
  const info = data.datas[id];

  console.log(info)

  if (info === undefined)
    return (<NotFound />);

  return (
    <Container>
      <Row style={{rowGap: "50px"}}>
        <Col span={16}>
          <GameImg image={info.image} />
          <View view={info.view} />
          <Story />
        </Col>
        <Col span={1} />
        <Col span={7}>
          <SideBar id={id} info={info} />
        </Col>
      </Row>
    </Container>
  );
};

export default Game;
