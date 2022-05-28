import { Grid, Typography, Button } from "@mui/material";
import { projects } from "../utils/listProject";
import CloseIcon from "@mui/icons-material/Close";

const Project = ({ index, setModal }) => {
	const { title, description, logo, illustrations, skillWorked, github } = projects[index];

	const regex = new RegExp(/[.webm]$/);

	return (
		<Grid container pl={3} pr={3} sx={{ backgroundColor: "#FFF" }}>
			<Button
				variant="text"
				sx={{ position: "absolute", top: "2%", right: "4%", borderRadius: "100px" }}
				onClick={() => setModal(false)}
			>
				<CloseIcon fontSize="large" />
			</Button>
			<Grid item xs={12} pb={1}>
				<h1>
					<img className="logo-project slideY-one" src={logo} alt={title} />
				</h1>
			</Grid>
			<Grid item xs={12} className="slideY-two" sx={{ opacity: "0" }} mb={2}>
				<Typography color="primary" variant="h2" fontWeight={400} mb={3}>
					{description}
				</Typography>

				<ul>
					{skillWorked.map((skill, index) => (
						<li key={`index ${index}`}>
							<Typography paragraph>{skill}</Typography>
						</li>
					))}
				</ul>
				<Button href={github}>Voir sur Github</Button>

				{illustrations.map((media, index) => (
					<Grid item xs={12} className="slideY-three container-illustration" mt={3} mb={4} pb={3} pt={3} key={index}>
						{media.match(regex) ? (
							<video className="illustration" controls>
								<source src={media} />
							</video>
						) : (
							<img className="illustration" src={media} alt="illustration" />
						)}
					</Grid>
				))}
			</Grid>
		</Grid>
	);
};
export default Project;
