import React from "react";
import Card from "./Card";

const CardArray = ({ data }) => {
	return (
	<div style={{
		display: "flex",
		overflowX: "auto",
		gap: "20px",
	}}>
	{data.map((game) => (
		<Card
		key={game.id}
		id={game.id}
		title={game.title}
		image={game.image}
		description={game.description}
		place={game.place}
		isSkeleton={game.isSkeleton}
		/>
		))}
	</div>
	);
};

export default CardArray;
