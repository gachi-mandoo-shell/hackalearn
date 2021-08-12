import React from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown"
import Container from "../components/Container";
import data from "../gamelist.json";
import CardArray from "../components/CardArray";
import { Divider, Button } from 'antd';
import filterInfo from "../lib/util/filterInfo";

const Ending = () => {
  const { id } = useParams();
  const currentLocation = data.datas[id].location;

  const currentData = filterInfo(data, currentLocation);

  return (
    <Container>
      <h1>Ending!</h1>
      <Divider orientation="left">같은 지역 다른 게임 하기!</Divider>
      <CardArray data={currentData} />
      <Button type="primary" block style={{marginTop: "30px"}}>
        <Link id={"list"} to={"/#list"}>
          다른 지역 게임 하러가기!
        </Link>
      </Button>
    </Container>
  );
};

export default Ending;
