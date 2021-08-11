import React from "react";
import { Link } from "react-router-dom";
import { Card, Button, Divider, Row, Col } from 'antd';
import {
	FieldTimeOutlined,
	TrophyOutlined,
} from '@ant-design/icons';

const SideBar = ({ id, info }) => {
	return (
		<div style={{
			position: "sticky",
			marginTop: "2rem",
			top: "20px",
		}}>
			<Card title={info.title} style={{ borderRadius: "10px", marginBottom: "5px" }}>
				<p>장소: {info.place}</p>
				<p>요약: {info.description}</p>
				<Divider />
				<Row>
					<Col span={12}><FieldTimeOutlined /> Playtime: {info.playtime}</Col>
					<Col span={12}><TrophyOutlined /> Level: {info.level}</Col>
				</Row>
				<Link to={`/games/${id}/play`}>
					<Button type="primary" block style={{ marginTop: "20px" }}>Start!!!</Button>
				</Link>
			</Card>
			<Card style={{ borderRadius: "10px" }}>
				<p>Goal Title</p>
				<p>Goooooooooooooooal!!!</p>
			</Card>
		</div>
	);
};

export default SideBar;
