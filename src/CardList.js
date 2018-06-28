import React from "react";
import Card from "./Card";

const CardList = ({robots}) => {
	const cardArray = robots.map((user, i) => {
		return <Card name={robots[i].name} email={robots[i].email} id={robots[i].id} />
	})
	return (<div>
		{cardArray}
		</div>);
}

export default CardList;