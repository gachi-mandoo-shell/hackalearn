import React, { useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import Container from "../components/Container";
import data from "../gamelist.json";
import CardArray from "../components/CardArray";
import { Divider, Button, Modal } from "antd";
import filterInfo from "../lib/util/filterInfo";
import EndingIntro from "../components/EndingIntro";
import NotFound from "./NotFound";
import EndingRecipe from "../components/EndingRecipe";
import "../style/markdown.css";

const Ending = () => {
  const history = useHistory();
  const { id } = useParams();
  const info = data.datas[id];

  useEffect(() => {
    if (!info) return;

    const prevData = JSON.parse(window.localStorage.getItem(`game-stat-${id}`));
    if (!prevData || !prevData.isFinished) {
      Modal.error({
        title: "게임을 플레이 하고 다시 와주세요!",
        onOk: () => history.push(`/games/${id}`),
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [info, id]);

  if (info === undefined || info.isSkeleton === true) return <NotFound />;

  const currentLocation = data.datas[id].location;
  const currentData = filterInfo(data, currentLocation);
  const dataById = data.datas[id];

  return (
    <Container>
      <EndingIntro
        endingTopic={dataById.endingTopic}
        endingImage={dataById.endingImage}
        endingContents={dataById.endingContents}
      />
      <EndingRecipe
        data={dataById.endingRecipe}
        cookingOrder={dataById.cookingOrder}
      />
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
