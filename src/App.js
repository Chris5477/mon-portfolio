import Home from "./screen/Home";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import Projects from "./screen/Projects";

function App() {
	return (
		<div className="App">
			<TopBar />
      {/* <Home /> */}
      <Projects />
      <Footer />
		</div>
	);
}

export default App;
