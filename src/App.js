import Home from "./screen/Home";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import Content from "./screen/Content";
import Project from "./components/Project";
import Information from "./components/Information";
import { projects } from "./utils/listProject";
import { presentation } from "./utils/presentation";

function App() {
	return (
		<div className="App">
			<div className="confetti anim-1">.</div>
			<div className="confetti anim-2">.</div>
			<div className="confetti anim-3">.</div>
			<div className="confetti anim-4">.</div>
			<div className="confetti anim-5">.</div>
			<div className="confetti anim-6">.</div>
			<div className="confetti anim-7">.</div>
			<div className="confetti anim-8">.</div>
			<div className="confetti anim-9">.</div>
			<div className="confetti anim-10">.</div>
			<TopBar />
			<Home />
			{/* <Content title="Mes projets" list={projects} />
			<Content title="À propos de moi" list={presentation} />
			<Project />
			<Information /> */}
			<Footer />
		</div>
	);
}

export default App;
