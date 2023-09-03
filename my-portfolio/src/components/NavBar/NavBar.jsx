import React from "react";
import "./NavBar.css";

export const NavBar = () => {
	return (
		<div className="navbar">
			<div className="navcontent">
				<div className="links">
					<img src="/icons/gift.png" alt="logo" className="logo" loading="lazy" />
					<ul className="list">
						<a href="#home" onClick={() => scrollToElement("home")}>
							<li className="listitem">
									Home
							</li>
						</a>
						<li className="listitem" >
							<a href="#experience" onClick={() => scrollToElement("experience")}>
								Experience
							</a>
						</li>
						<a href="#projects" onClick={() => scrollToElement("projects")}>
							<li className="listitem">
								Projects
							</li>
						</a>
						<a href="#contact" onClick={() => scrollToElement("contact")}>
							<li className="listitem">
								Contact
							</li>
						</a>
					</ul>
				</div>
				<div className="icons">
					<a href="https://github.com/shashankp28" target="_blank">
						<img src="/icons/github.png" alt="GitHub" className="icon" loading="lazy" />
					</a>
					<a href="https://www.linkedin.com/in/shashank-p-a05283224/" target="_blank">
						<img src="/icons/linkedin.png" alt="LinkedIn" className="icon" loading="lazy" />
					</a>
					<p className="contact-block">
						<b className="contact">Contact:  </b>
						<span className="phone-number">+91 9483303320</span>
					</p>
				</div>
			</div>
		</div>
	);
};
