import React from "react";
import "./NavBar.css";

export const NavBar = () => {
	return (
		<div className="navbar">
			<div className="navcontent">
				<div className="links">
					<img src="/img/photo.jpg" alt="logo" className="logo" />
					<ul className="list">
						<li className="listitem">Home</li>
						<li className="listitem">Studio</li>
						<li className="listitem">Works</li>
						<li className="listitem">Contact</li>
					</ul>
				</div>
				<div className="icons">
					<img src="/img/search.png" alt="logo" className="icon" />
					<button className="button">Click</button>
				</div>
			</div>
		</div>
	);
};
