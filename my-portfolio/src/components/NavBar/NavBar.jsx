import React from "react";
import "./NavBar.css";

export const NavBar = () => {
	return (
		<div class="navbar">
			<div class="navcontent">
				<div class="links">
					<img src="/img/photo.jpg" alt="logo" class="logo" />
					<ul class="list">
						<li class="listitem">Home</li>
						<li class="listitem">Studio</li>
						<li class="listitem">Works</li>
						<li class="listitem">Contact</li>
					</ul>
				</div>
				<div class="icons">
					<img src="/img/search.png" alt="logo" class="icon" />
					<button class="button">Click</button>
				</div>
			</div>
		</div>
	);
};
