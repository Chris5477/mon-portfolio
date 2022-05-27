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
import { useDebugValue, useEffect, useState } from "react";
import Project from "../components/Project";
import Information from "../components/Information";

const Content = ({ title, texte, list, posCard, setPosCard }) => {
	const [index, setIndex] = useState(0);
	const [modal, setModal] = useState(false);
	const classBox = modal ? "openProject" : "closeProject";
	const isDescription = title === "Mes projets" ? true : false;
	let component;

	const [disabledBtnPrev, setDisabledBtnPrev] = useState(true);
	const [disabledBtnNext, setDisabledBtnNext] = useState(false);

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

	const sizeContainer = (list.length - 1) * 282;

	const previous = () => {
		setPosCard(posCard - 282);
		setDisabledBtnNext(false);
		posCard <= 282 && setDisabledBtnPrev(true);
	};

	const next = (e) => {
		setPosCard(posCard + 282);
		setDisabledBtnPrev(false);
		posCard >= sizeContainer - 282 && setDisabledBtnNext(true);
	};

	useEffect(() => {
		if (posCard == 0) {
			setDisabledBtnPrev(true);
			setDisabledBtnNext(false);
		}
	});

	useEffect(() => {
		document.querySelector(".slideY-three").style.right = posCard + "px";
		document.querySelector(".slideY-three").style.transition = "0.4s";
	}, [posCard]);

	return (
		<Grid container mt={2} sx={{ overflow: "hidden" }}>
			<Grid item xs={12} className="slideY-one" sx={{ opacity: 0 }}>
				<Typography variant="h1" fontSize={"50px"} pl={3} mb={2}>
					{title}
				</Typography>
			</Grid>
			<Grid item xs={12} className="slideY-two" sx={{ opacity: 0 }}>
				<Stack direction="row">
					{isDescription ? (
						<Typography color="primary" variant="h2" fontSize={"50px"} fontWeight={600} pl={3} pr={1} mb={3}>
							{list.length}
						</Typography>
					) : (
						<Typography color="primary" variant="h2" fontSize={"50px"} fontWeight={400} pl={3} mb={3}>
							P
						</Typography>
					)}
					<Typography variant="h4" fontWeight={200} pt={2} mb={2}>
						{texte}
					</Typography>
				</Stack>
			</Grid>
			<Stack
				direction="row"
				height="400px"
				pl={3}
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
			<Stack pl={3} direction="row" spacing={3}>
				<Button
					fullWidth
					size="large"
					variant="contained"
					className="btn-previous"
					disabled={disabledBtnPrev}
					onClick={previous}
				>
					previous
				</Button>
				<Button
					fullWidth
					size="large"
					variant="contained"
					className="btn-next"
					disabled={disabledBtnNext}
					onClick={next}
				>
					next
				</Button>
			</Stack>
			<Box className={classBox}>{component}</Box>
		</Grid>
	);
};
export default Content;
