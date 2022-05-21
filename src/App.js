import Home from "./screen/Home";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import Content from "./screen/Content";

function App() {
	return (
		<div className="App">
			<TopBar />
			<Home />
			{/* <Content /> */}
			<Footer />
		</div>
	);
}

export default App;
