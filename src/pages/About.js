import React from "react";
import Container from "../components/Container";
import { Tabs, Divider } from 'antd';
import ReactMarkdown from "react-markdown";
import "../style/markdown.css"

const { TabPane } = Tabs;

const About = () => {
  return (
    <Container>
      <Tabs defaultActiveKey="1">
        <TabPane tab="생생 한국통" key="1">
          <div style={{ marginTop: "30px" }}>
            <h1>생생 한국통</h1>
            <Divider />
            <ReactMarkdown>
              {`
## 서비스 안내

**생생 한국통**은 카카오맵 로드뷰를 이용하여 게임 형식으로 한국의 문화를 알리고자 만들어진 서비스입니다.


한국 여행이 힘들어진 요즘, 로드뷰를 통해 한국의 관광명소를 둘러보며 문화를 배우고 간접적으로 체험도 할 수 있는 서비스입니다.


게임이 끝나면 각 테마에 맞는 보상 혹은 추가적인 유용한 정보를 제공하고 있습니다.
`}
            </ReactMarkdown>
          </div>
        </TabPane>
        <TabPane tab="만든 사람들" key="2">
          <div style={{ marginTop: "30px" }}>
            <h1>개발자 소개</h1>
            <Divider />
            <ReactMarkdown className={"markdown"}>
              {`
# 42Seoul Cadet입니다.

- ## 기획

  권혁배 금종은 김재서 이형래

- ## 페이지 제작

  권혁배 금종은 김재서 이형래


- ## 로드뷰를 이용한 게임 개발

  김재서


- ## 스토리 작성

  권혁배

- ## 참여자
  - ### 권혁배 - [GitHub](https://github.com/hb-kwon)
  - ### 금종은 - [GitHub](https://github.com/JongeunKeum)
  - ### 김재서 - [GitHub](https://github.com/JaeSeoKim)
  - ### 이형래 - [GitHub](https://github.com/hyungraelee)
`}
            </ReactMarkdown>
          </div>
        </TabPane>
      </Tabs>
    </Container>
  );
};

export default About;
