import { Contact } from "./components/Contact/Contact";
import { Home } from "./components/Home/Home";
import { Who } from "./components/Who/Who";
import { Works } from "./components/Works/Works";
import { NavBar } from "./components/NavBar/NavBar";

import "./App.css";

function App() {
	return (
		<div className="page">
			<NavBar />
			<div className="general">
				<Home />
				<Who />
				<Works />
				<Contact />
			</div>
		</div>
	);
}

export default App;
