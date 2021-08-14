import React from "react";
import { useParams, Link } from "react-router-dom";
import Container from "../components/Container";
import data from "../gamelist.json";
import CardArray from "../components/CardArray";
import { Divider, Button } from 'antd';
import filterInfo from "../lib/util/filterInfo";
import EndingIntro from "../components/EndingIntro";
import "../style/markdown.css";
import EndingRecipe from "../components/EndingRecipe";

const Ending = () => {
  const { id } = useParams();
  const currentLocation = data.datas[id].location;

  const currentData = filterInfo(data, currentLocation);

  const dataById = data.datas[id];

  return (
    <Container>
      <EndingIntro
        endingTopic={dataById.endingTopic}
        endingImage={dataById.endingImage}
        endingContents={dataById.endingContents} />
      <EndingRecipe data={dataById.endingRecipe} cookingOrder={dataById.cookingOrder} />
      <Divider orientation="left">같은 지역 다른 게임 하기!</Divider>
      <CardArray data={currentData} />
      <Button type="primary" block style={{ marginTop: "30px" }}>
        <Link id={"list"} to={"/#list"}>
          다른 지역 게임 하러가기!
        </Link>
      </Button>
    </Container>
  );
};

export default Ending;
