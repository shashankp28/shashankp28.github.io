import React, { useState, useEffect } from "react";
import data from "../../constants.json";
import "./Home.css";
import { Model } from "../3dModels/Brouche";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

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

	return (
		<div className="home">
			<div className="left">
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
			</div>
			<div className="right">
				<Canvas>
					<OrbitControls enableZoom={false} />
					<ambientLight intensity={1} />
					<Model />
				</Canvas>
			</div>
		</div>
	);
};
