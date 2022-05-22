import { Grid, Typography, ImageList, ImageListItem, Button } from "@mui/material";
import { projects } from "../utils/listProject";

const Project = () => {
	const { title, description, logo, illustrations, skillWorked, github } = projects[11];
	return (
		<Grid container pl={3} pr={3}>
			<Grid item xs={12}>
				<h1>
					<img className="logo-project slideY-one" src={logo} alt={title} />
				</h1>
			</Grid>
			<Grid item xs={12} className="slideY-two" sx={{ opacity: "0" }}>
				<Typography variant="h2" fontSize={30} fontWeight={400} mb={3}>
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

				{illustrations.map((picture, index) => (
					<Grid item xs={12} className="slideY-three" sx={{ opacity: 0 }} mt={3} key={index}>
						{<img className="illustration" src={picture} alt="illustration" />}
					</Grid>
				))}
			</Grid>
		</Grid>
	);
};
export default Project;
