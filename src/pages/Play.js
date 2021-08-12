import { Modal } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { CustomOverlayRoadview, Roadview } from "react-kakao-maps-sdk";
import { useParams } from "react-router-dom";
import Inventory from "../components/Play/Inventory";
import Map from "../components/Play/Map";
import ObjectItem from "../components/Play/ObjectItem";

const PlayData = {
  id: 4201,
  title: "경복궁",
  map: "/img/경복궁.jpeg",
  item: [
    {
      id: 1,
      title: "경복궁 아이템1",
      script: {
        title: "경복궁 아이템 스크리트 제목",
        description: [
          "경복궁 아이템 스크리트 설명1",
          "경복궁 아이템 스크리트 설명2",
          "경복궁 아이템 스크리트 설명3",
        ],
      },
      npcImage: "/img/경복궁.jpeg",
      itemImage: "/img/경복궁.jpeg",
      position: {
        lat: 33.55635,
        lng: 126.795841,
      },
    },
  ],
};

const Play = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [game, setGame] = useState({
    item: [],
    lastTime: new Date(),
    position: {
      lat: 33.5563,
      lng: 126.7958,
    },
  });
  const container = useRef(null);

  // 화먄 새로고침시 게임 데이터 체크 안내 메세지 출력
  useEffect(() => {
    const prevData = JSON.parse(window.localStorage.getItem(`game-stat-${id}`));

    if (prevData) {
      Modal.warning({
        title: "이전에 진행하던 게임 데이터가 있습니다!",
        content: (
          <p>
            마지막 진행 했던 시간 :{" "}
            {new Date(prevData.lastTime).toLocaleString()}
          </p>
        ),
        okText: "확인",
        onOk: () => {
          setGame(prevData);
          setLoading(false);
        },
        okCancel: true,
        onCancel: () => {
          setLoading(false);
        },
        cancelText: "취소",
      });
    } else {
      Modal.info({
        title: "인트로...",
        content: (
          <>
            <p>게임 시나리오 시나리오 시나리오</p>
          </>
        ),
        okText: "확인",
        onOk: () => setLoading(false),
      });
    }
  }, [id]);

  useEffect(() => {
    if (loading) return;
    localStorage.setItem(
      `game-stat-${id}`,
      JSON.stringify({
        ...game,
        lastTime: new Date(),
      })
    );
  }, [id, game, loading]);

  if (loading) return <></>;

  return (
    <>
      <Roadview
        containerElem={container.current}
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
          overflow: "hidden",
        }}
        position={{
          lat: game.position.lat,
          lng: game.position.lng,
          radius: 50,
        }}
        onPositionChanged={(target) => {
          setGame({
            ...game,
            position: {
              lat: target.getPosition().getLat(),
              lng: target.getPosition().getLng(),
            },
          });
        }}
      >
        {PlayData.item.map((data) => {
          if (!game.item.includes(data.id)) {
            return (
              <CustomOverlayRoadview
                key={data.id}
                position={data.position}
                range={50}
              >
                <ObjectItem
                  id={data.id}
                  title={data.title}
                  script={data.script}
                  image={data.npcImage}
                  onClick={() => {
                    setGame({
                      ...game,
                      item: [...game.item, data.id],
                    });
                  }}
                />
              </CustomOverlayRoadview>
            );
          }
          return <React.Fragment key={data.id}></React.Fragment>;
        })}
        <Map mapSrc={"/img/경복궁.jpeg"} />
        <Inventory
          items={PlayData.item.filter((data) => game.item.includes(data.id))}
        />
      </Roadview>
    </>
  );
};

export default Play;
