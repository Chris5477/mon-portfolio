import { Box, Typography, ImageList, ImageListItem } from "@mui/material";

const Project = () => {
	return (
		<Box>
			<img src="" alt="project" />

			<Typography variant="h1">Title</Typography>
			<Typography variant="h2">Desription</Typography>
			<ul>
				{Array.from({ length: 4 }).map((_, index) => (
					<li key={`index ${index}`}>
						<Typography>Skill</Typography>
					</li>
				))}
			</ul>
			<ul>
				{Array.from({ length: 4 }).map((_, index) => (
					<li key={`index ${index}`}>
						<Typography paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. T</Typography>
					</li>
				))}
			</ul>
			<Box sx={{ width: 500, height: 450, overflowY: "scroll" }}>
				<ImageList variant="masonry" cols={3} gap={8}>
					{Array.from({ length: 6 }).map((_, index) => (
						<ImageListItem key={index}>{/* <img/> */}</ImageListItem>
					))}
				</ImageList>
			</Box>
		</Box>
	);
};
export default Project;
