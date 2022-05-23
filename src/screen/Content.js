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
import { useState } from "react";
import Project from "../components/Project";
import Information from "../components/Information";

const styleCard = {
	backgroundColor: "grey",
	width: "250px",
	height: "350px",
	borderRadius: "8px",
	borderRadius: "12px",
	position: "relative",
};

const styleFooterCard = {
	position: "absolute",
	bottom: "2%",
	left: "2%",
};



const Content = ({ title, texte, list }) => {
	const [index, setIndex] = useState(0);
	const [modal, setModal] = useState(false);

	const classBox = modal ? "openProject" : "closeProject"

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

	return (
		<Grid container mt={5} mb={10} sx={{ overflow: "hidden" }}>
			<Grid item xs={12} justifyContent="center" className="slideY-one" sx={{ opacity: 0 }}>
				<Typography variant="h1" fontSize={"50px"} color="primary" pl={3} mb={5}>
					{title}
				</Typography>
			</Grid>
			<Grid item xs={12} justifyContent="center" className="slideY-two" sx={{ opacity: 0 }}>
				<Stack direction="row">
					{isDescription && (
						<Typography variant="h2" fontSize={"50px"} fontWeight={600} color="primary" pl={3} mb={5}>
							{list.length}
						</Typography>
					)}
					<Typography variant="h2" fontSize={"30px"} pl={1} pt={2} mb={2}>
						{texte}
					</Typography>
				</Stack>
			</Grid>
			<Stack
				direction="row"
				height="400px"
				pl={3}
				pt={2}
				pb={2}
				spacing={4}
				className="slideY-three"
				sx={{ opacity: 0 }}
			>
				{list.map(({ id, title, description }) => (
					<Card key={id} sx={styleCard}>
						<CardHeader
							title={id < 10 ? `0${id}` : id}
							titleTypographyProps={{ fontSize: "60px", paddingLeft: "20px" }}
						/>
						<Divider variant="middle" />
						<CardContent>
							<Typography variant="h5" mb={2}>
								{title}
							</Typography>
							<Typography paragraph>{isDescription && description}</Typography>
						</CardContent>
						<CardActions disableSpacing sx={styleFooterCard}>
							<Button variant="contained" sx={{ paddingLeft: "5px" }} onClick={() => setProject(id)}>
								<AddIcon />
								Plus
							</Button>
						</CardActions>
					</Card>
				))}
			</Stack>
			<Box className={classBox} >{component}</Box>
		</Grid>
	);
};
export default Content;
