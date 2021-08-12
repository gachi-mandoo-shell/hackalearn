import React from "react";
import Container from "../components/Container";
import { Tabs, Divider } from 'antd';

const { TabPane } = Tabs;

const About = () => {
  return (
    <Container>
      <Tabs defaultActiveKey="1">
        <TabPane tab="생생 한국통" key="1">
          <div>
            <br />
            <h1>생생 한국통</h1>
            <Divider />
            <p>
              외국인들에게 우리나라의 문화를 간접적으로 느낄수 있도록 하는 서비스.
            </p>
          </div>
        </TabPane>
        <TabPane tab="만든 사람들" key="2">
          <div>
            <br />
            <h1>우리는</h1>
            <Divider />
            <p>
              42Seoul에서 만나 열심히 공부하는 친구들.
            </p>
          </div>
        </TabPane>
      </Tabs>
    </Container>
  );
};

export default About;
