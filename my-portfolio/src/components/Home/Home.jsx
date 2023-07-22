import React, { useState, useEffect } from "react";
import data from "../../constants.json";
import "./Home.css";

export const Home = () => {
	const message = "$ "+data["introduction"];
	const [textIndex, setTextIndex] = useState(2);
	useEffect(() => {
		const type = () => {
			if (textIndex < message.length - 1) {
				setTextIndex(textIndex + 1);
			}
		};
		setTimeout(type, 50);
	}, [textIndex]);

	return (
		<div className="home">
			<div className="left">
				<h1>Shashank P</h1>
				<div className="terminal">
					<p>{message.slice(0, textIndex + 1)}</p>
				</div>
			</div>
			<div className="right">
				<p>Here an Image will come</p>
			</div>
		</div>
	);
};
