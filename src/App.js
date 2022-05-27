import Home from "./screen/Home";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import Content from "./screen/Content";
import { projects } from "./utils/listProject";
import { presentation } from "./utils/presentation";
import { theme } from "./utils/theme.js";
import { ThemeProvider } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { createImg } from "./utils/animationLogo";
import react1 from "./assets/icon/react1.svg";
import react2 from "./assets/icon/react2.svg";
import react3 from "./assets/icon/react3.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	const pathImg = [react1, react2, react3];
	const [positionCard, setPositionCard] = useState(0);
	const [indexPage, setIndexPage] = useState(0);
	const [open, setOpen] = useState(false);
	const [modal, setModal] = useState(false);


	useEffect(() => {
		setInterval(() => createImg(pathImg), 4000);
	}, []);

	const pages = [
		<Home />,
		<Content
			title="Mes projets"
			texte={"projets réalisés"}
			posCard={positionCard}
			setPosCard={setPositionCard}
			list={projects}
			modal={modal}
			setModal={setModal}
		/>,
		<Content
			title="Qui je suis ?"
			texte="résentation"
			posCard={positionCard}
			setPosCard={setPositionCard}
			list={presentation}
			modal={modal}
			setModal={setModal}
		/>,
	];

	return (
		<div className="App" style={{ height: window.innerHeight }}>
			<ThemeProvider theme={theme("primary")}>
				<TopBar handleClick={setIndexPage} open={open} setOpen={setOpen} />
				<BrowserRouter>
					<Routes>
						<Route exact path="/mon-portfolio/" element={pages[indexPage]} />
					</Routes>
				</BrowserRouter>

				<Footer handleClick={setIndexPage} setOpen={setOpen} setPosCard={setPositionCard} setModal={setModal} />
			</ThemeProvider>
		</div>
	);
}

export default App;
