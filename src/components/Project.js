import { Box, Typography, ImageList, ImageListItem, Button } from "@mui/material";
import { projects } from "../utils/listProject";

const Project = () => {
	const { title, description, logo, illustrations, skillWorked, github } = projects[0]
	return (
		<Box>
			<img src={logo} alt="project" />

			<Typography variant="h1">{title}</Typography>
			<Typography variant="h2">{description}</Typography>

			<ul>
				{skillWorked.map((skill, index) => (
					<li key={`index ${index}`}>
						<Typography paragraph>{skill}</Typography>
					</li>
				))}
			</ul>
			<Button href={github}>Voir sur Github</Button>
			<Box sx={{ width: 500, height: 450, overflowY: "scroll" }}>
				<ImageList variant="masonry" cols={3} gap={8}>
					{illustrations.map((picture, index) => (
						<ImageListItem key={index}>{<img src={picture} alt="illustration" />}</ImageListItem>
					))}
				</ImageList>
			</Box>
		</Box>
	);
};
export default Project;
