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
			<TopBar />
			<Home />
			{/* <Content list={projects} /> */}
			{/* <Content list={presentation} /> */}
			{/* <Project /> */}
			{/* <Information /> */}
			<Footer />
		</div>
	);
}

export default App;
