import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import { Home } from "./components/Home/Home";
import { Education } from "./components/Education/Education";
import { Experience } from "./components/Experience/Experience";
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";

function App() {
	return (
		<div className="page">
			<NavBar />
			<div className="general">
				<Home />
				<Education />
				<Experience />
				<Projects />
				<Contact />
			</div>
		</div>
	);
}

export default App;
