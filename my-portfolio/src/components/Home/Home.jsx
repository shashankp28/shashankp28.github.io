import React, { useState, useEffect } from "react";
import data from "../../constants.json";
import "./Home.css";

export const Home = () => {
	const messages = data["introduction"];
	const [textIndex, setTextIndex] = useState(0);
	const [lineIndex, setLineIndex] = useState(0);
	useEffect(() => {
		const type = () => {
			if (lineIndex < messages.length) {
				if (textIndex < messages[lineIndex].length) {
					setTextIndex((prev) => prev + 1);
				} else {
					setLineIndex((prev) => prev + 1);
					setTextIndex(0);
				}
			}
		};
		setTimeout(type, 15);
	}, [lineIndex, textIndex]);

	const skills = data["skills"];

	return (
		<div className="home" id="home">
			<div className="left">
				<h1>Shashank P</h1>
				<div className="terminal">
					<pre>
						{(() => {
							let text = "";
							for (let i = 0; i < lineIndex; i++) {
								text += "$>  " + messages[i];
								text += "\n\n";
							}
							if (lineIndex < messages.length) {
								text += "$>  " + messages[lineIndex].substring(0, textIndex);
							}
							return text;
						})()}
					</pre>
				</div>
				<div className="skills">
					<h1>Skills</h1>
					<div className="skills-list">
						{skills.map((skill, index) => (
						<div className="skill-item" key={index}>
							<img src={skill.image} alt={skill.name} loading="lazy"/>
							<span>{skill.name}</span>
						</div>
						))}
					</div>
				</div>
			</div>
			<div className="right">
				<img src="/img/photo.jpg" alt="Profile Picture" loading="lazy" />
			</div>
		</div>
	);
};
