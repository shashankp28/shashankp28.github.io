import "./App.css";
import { Contact } from "./components/Contact/Contact";
import { Home } from "./components/Home/Home";
import { NavBar } from "./components/NavBar/NavBar";

function App() {
	return (
		<div className="page">
			<NavBar />
			<div className="general">
				<Home />
				<Education />
				<Experience />
				<Projects />
				<Publications />
				<Contact />
			</div>
		</div>
	);
}

export default App;
