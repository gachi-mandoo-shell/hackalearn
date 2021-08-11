import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from 'antd';
import {
	FieldTimeOutlined,
	TrophyOutlined,
} from '@ant-design/icons';

const SIDEBAR_WIDTH = 400;

const SideBar = ({ id, title, place, description, playtime, level }) => {
	return (
		<div style={{
			position: "sticky",
			top: "20px",
		}}>
			<Card title="title" style={{ width: SIDEBAR_WIDTH, borderRadius: "10px", marginBottom: "5px" }}>
				<p>place</p>
				<p>description</p>
				<div style={{
					display: "flex",
					gap: "30px",
				}}>
					<span style={{ display: "flex", gap: "5px" }}><FieldTimeOutlined />Playtime</span>
					<span style={{ display: "flex", gap: "5px" }}><TrophyOutlined />Level</span>
				</div>
				<Link to={`/games/${id}/play`}>
					<Button type="primary" block style={{ marginTop: "20px" }}>Start!!!</Button>
				</Link>
			</Card>
			<Card style={{ width: SIDEBAR_WIDTH, borderRadius: "10px" }}>
				<p>Goal Title</p>
				<p>Goooooooooooooooal!!!</p>
			</Card>
		</div>
	);
};

export default SideBar;
