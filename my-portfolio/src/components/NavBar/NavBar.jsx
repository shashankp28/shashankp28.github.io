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
						<li className="listitem">Education</li>
						<li className="listitem">Experience</li>
						<li className="listitem">Projects</li>
						<li className="listitem">Publication</li>
						<li className="listitem">Contact</li>
					</ul>
				</div>
				<div class="icons">
					<a href="https://github.com/shashankp28" target="_blank">
						<img src="/icons/github.png" alt="GitHub" class="icon" />
					</a>
					<a href="https://www.linkedin.com/in/shashank-p-a05283224/" target="_blank">
						<img src="/icons/linkedin.png" alt="LinkedIn" class="icon" />
					</a>
					<p class="contact-block">
						<b class="contact">Contact:  </b>
						<b> +91 9483303320  </b>
					</p>
				</div>
			</div>
		</div>
	);
};
