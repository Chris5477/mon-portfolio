import {
	Box,
	Grid,
	Stack,
	Typography,
	Card,
	CardContent,
	CardHeader,
	CardActions,
	Button,
	Divider,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useEffect, useState } from "react";
import Project from "../components/Project";
import Information from "../components/Information";

const Content = ({ title, texte, list }) => {
	const [index, setIndex] = useState(0);
	const [modal, setModal] = useState(false);
	const classBox = modal ? "openProject" : "closeProject";
	const isDescription = title === "Mes projets" ? true : false;
	let component;

	if (modal) {
		component = isDescription ? (
			<Project index={index} setModal={setModal} />
		) : (
			<Information index={index} setModal={setModal} />
		);
	}

	const setProject = (id) => {
		setModal(true);
		setIndex(id - 1);
	};

	let startX = 0;
	let container = "";
	let dist = 0;

	const startTouch = (e) => {
		container = document.querySelector(".slideY-three");
		startX = e.targetTouches[0].clientX;
	};

	const moveTouch = (e) => {
		let leftDirection = e.targetTouches[0].clientX < startX && "left";
		let rightDirection = e.targetTouches[0].clientX > startX && "right";
		let between = startX - e.targetTouches[0].clientX;

		if (leftDirection) {
			if (dist <= 3050) {
				dist += between * 0.08;
				container.style.right = dist + "px";
			} else {
				return 1;
			}
		}
		else if (rightDirection) {
			if (dist >= 0) {
				dist += between * 0.08;
				container.style.left = -dist + "px";
			} else {
				return 1;
			}
		}
		
	};

	useEffect(() => document.querySelector(".slideY-three").addEventListener("touchstart", (e) => startTouch(e)));
	useEffect(() => document.querySelector(".slideY-three").addEventListener("touchmove", (e) => moveTouch(e)));

	return (
		<Grid container mt={2} sx={{ overflow: "hidden" }}>
			<Grid item xs={12} className="slideY-one" sx={{ opacity: 0 }}>
				<Typography variant="h1" fontSize={"50px"} pl={3} mb={5}>
					{title}
				</Typography>
			</Grid>
			<Grid item xs={12} className="slideY-two" sx={{ opacity: 0 }}>
				<Stack direction="row">
					{isDescription ? (
						<Typography color="primary" variant="h2" fontSize={"50px"} fontWeight={600} pl={3} pr={1} mb={5}>
							{list.length}
						</Typography>
					) : (
						<Typography color="primary" variant="h2" fontSize={"50px"} fontWeight={400} pl={3} mb={5}>
							P
						</Typography>
					)}
					<Typography variant="h2" pt={2} mb={2}>
						{texte}
					</Typography>
				</Stack>
			</Grid>
			<Stack
				direction="row"
				height="500px"
				pl={3}
				pt={2}
				pb={2}
				spacing={4}
				className="slideY-three"
				sx={{ opacity: 0, position: "relative" }}
			>
				{list.map(({ id, title, description, logo }) => (
					<Card key={id}>
						{logo && <img className="logoCard" src={logo} alt="project" />}
						<CardHeader title={id < 10 ? `0${id}` : id} />
						<Divider variant="middle" />
						<CardContent>
							<Typography variant="h5" mb={2}>
								{title}
							</Typography>
							<Typography paragraph>{isDescription && description}</Typography>
						</CardContent>
						<CardActions disableSpacing>
							<Button sx={{ paddingLeft: "5px" }} onClick={() => setProject(id)}>
								<AddIcon />
								Plus
							</Button>
						</CardActions>
					</Card>
				))}
			</Stack>
			<Box className={classBox}>{component}</Box>
		</Grid>
	);
};
export default Content;
