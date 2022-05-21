import Home from "./screen/Home";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import Content from "./screen/Content";
import Project from "./components/Project";

function App() {
	return (
		<div className="App">
			<TopBar />
			{/* <Home /> */}
			{/* <Content /> */}
      <Project />
			<Footer />
		</div>
	);
}

export default App;
