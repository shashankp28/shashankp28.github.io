import React from "react";
import "./Test.css";
import { Canvas } from "@react-three/fiber";
import {
	OrbitControls,
	PerspectiveCamera,
	RenderTexture,
	Text,
} from "@react-three/drei";

export const Test = () => {
	return (
		<div className="test">
			<h1>Test</h1>
			<Canvas>
				<OrbitControls enableZoom={false} />
				<ambientLight intensity={1} />
				<directionalLight position={[3, 2, 1]} />
				<mesh>
					<boxGeometry args={[2, 2, 2]} />
					<meshStandardMaterial color="red">
						<RenderTexture attach="map">
							<PerspectiveCamera makeDefault position={[0, 0, 2]} />
							<color attach="background" args={["pink"]} />
							<Text fontSize={0.7} color="#555">
								Hello World!
							</Text>
						</RenderTexture>
					</meshStandardMaterial>
				</mesh>
			</Canvas>
		</div>
	);
};
