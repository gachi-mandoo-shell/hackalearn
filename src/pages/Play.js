import { Modal, notification } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { CustomOverlayRoadview, Roadview } from "react-kakao-maps-sdk";
import ReactMarkdown from "react-markdown";
import { useHistory, useParams } from "react-router-dom";
import Inventory from "../components/Play/Inventory";
import Map from "../components/Play/Map";
import ObjectItem from "../components/Play/ObjectItem";
import Data from "../gamelist.json";

const Play = () => {
  const history = useHistory();
  const { id } = useParams();
  const [PlayData, setPlayData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [game, setGame] = useState(null);
  const container = useRef(null);

  useEffect(() => {
    if (Data.datas[id] === undefined || Data.datas[id].isSkeleton)
      history.push(`/404`);
    else {
      setLoading(false);
      setPlayData(Data.datas[id].playData);
    }
  }, [id, history]);

  useEffect(() => {
    if (PlayData === null) return;
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
          Modal.info({
            title: "",
            content: PlayData.intro.map((intro) => (
              <ReactMarkdown>{intro}</ReactMarkdown>
            )),
            okText: "확인",
            onOk: () => setLoading(false),
          });
        },
        cancelText: "취소",
      });
    } else {
      Modal.info({
        title: "인트로...",
        content: PlayData.intro.map((intro) => (
          <ReactMarkdown>{intro}</ReactMarkdown>
        )),
        okText: "확인",
        onOk: () => setLoading(false),
      });
    }
  }, [id, PlayData]);

  useEffect(() => {
    if (loading || !PlayData || game) return;

    setGame({
      item: [],
      hasMap: false,
      position: PlayData.startPosition,
    });
  }, [loading, game, PlayData]);

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

  if (loading || !PlayData || !game) return <></>;

  return (
    <>
      {/* DEBUG용 워프 버튼  */}
      {/* <button
        onClick={() => setGame({ ...game, position: PlayData.npc.position })}
      >
        상궁
      </button>
      <button
        onClick={() =>
          setGame({ ...game, position: PlayData.npc.warpPosition })
        }
      >
        왕
      </button>
      {PlayData.item.map((item) => (
        <button onClick={() => setGame({ ...game, position: item.position })}>
          {item.npcName}
        </button>
      ))} */}
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
        }}
        panoId={game.position.panoId}
        pan={game.position.pan}
        tilt={game.position.tilt}
        onPositionChanged={(roadview) => {
          setGame({
            ...game,
            position: {
              ...game.position,
              lat: roadview.getPosition().getLat(),
              lng: roadview.getPosition().getLng(),
              panoId: roadview.getPanoId(),
            },
          });
        }}
        onViewpointChange={(roadview) => {
          setGame({
            ...game,
            position: {
              ...game.position,
              pan: roadview.getViewpointWithPanoId().pan,
              tilt: roadview.getViewpointWithPanoId().tilt,
              panoId: roadview.getPanoId(),
            },
          });
        }}
      >
        {game.hasMap ? (
          <Map mapSrc={PlayData.map} />
        ) : (
          <CustomOverlayRoadview
            position={{
              lat: PlayData.npc.position.lat,
              lng: PlayData.npc.position.lng,
            }}
            range={15}
            panoId={PlayData.npc.position.panoId}
            pan={PlayData.npc.position.pan}
            tilt={PlayData.npc.position.tilt}
          >
            <ObjectItem
              name={"약도"}
              npcName={PlayData.npc.name}
              scripts={PlayData.npc.startScripts}
              image={PlayData.npc.image}
              onClick={() => {
                notification.success({
                  message: `약도를 획득하였다!`,
                  placement: "bottomRight",
                });
                setGame({
                  ...game,
                  hasMap: true,
                });
              }}
            />
          </CustomOverlayRoadview>
        )}
        <CustomOverlayRoadview
          position={{
            lat: PlayData.npc.position.lat,
            lng: PlayData.npc.position.lng,
          }}
          range={15}
          panoId={PlayData.npc.position.panoId}
          pan={PlayData.npc.position.pan}
          tilt={PlayData.npc.position.tilt}
        >
          {game.hasMap && game.item.length === PlayData.item.length && (
            <ObjectItem
              npcName={PlayData.npc.name}
              scripts={PlayData.npc.endScripts}
              image={PlayData.npc.image}
              onClick={() => {
                setGame({
                  ...game,
                  position: {
                    ...PlayData.npc.warpPosition,
                  },
                });
              }}
            />
          )}
        </CustomOverlayRoadview>
        <CustomOverlayRoadview
          position={{
            lat: PlayData.boss.position.lat,
            lng: PlayData.boss.position.lng,
          }}
          range={15}
          panoId={PlayData.boss.position.panoId}
          pan={PlayData.boss.position.pan}
          tilt={PlayData.boss.position.tilt}
        >
          {game.hasMap && game.item.length === PlayData.item.length && (
            <ObjectItem
              name={"엔딩"}
              npcName={PlayData.boss.name}
              scripts={PlayData.boss.scripts}
              image={PlayData.boss.npcImage}
              onClick={() => {
                setGame({
                  ...game,
                  isFinished: true,
                });
                history.push(`/games/${id}/ending`);
              }}
            />
          )}
        </CustomOverlayRoadview>

        {PlayData.item
          .filter((data) => !game.item.includes(data.id))
          .map((data) => (
            <CustomOverlayRoadview
              key={data.id}
              position={{
                lat: data.position.lat,
                lng: data.position.lng,
              }}
              range={15}
              panoId={data.position.panoId}
              pan={data.position.pan}
              tilt={data.position.tilt}
            >
              <ObjectItem
                name={data.name}
                npcName={data.npcName}
                scripts={data.scripts}
                image={data.npcImage}
                onClick={() => {
                  notification.success({
                    message: `${data.name} 를 획득하였다!`,
                    placement: "bottomRight",
                  });
                  setGame({
                    ...game,
                    item: [...game.item, data.id],
                  });
                }}
              />
            </CustomOverlayRoadview>
          ))}
        <Inventory
          items={PlayData.item.filter((data) => game.item.includes(data.id))}
        />
      </Roadview>
    </>
  );
};

export default Play;
