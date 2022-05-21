import { Grid, Stack, Typography, Card, CardContent, CardHeader, CardActions, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const Projects = () => {
	const array = Array.from({ length: 8 }).fill("x");
	console.log(array);
	return (
		<Grid container>
			<Grid item>
				<Typography variant="h2">Lorem ipsum dolor sit amet.</Typography>
			</Grid>
			<Stack width="auto" height="300px" direction="row" justifyContent={"space-around"}>
				{array.map((_, index) => (
					<Card key={`index ${index}`} sx={{ width: 200, height: "500px" }}>
						<CardHeader title={index} />
						<CardContent>
							<Typography variant="body2" color="text.secondary">
								This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1
							</Typography>
						</CardContent>
						<CardActions disableSpacing>
							<IconButton aria-label="add to favorites">
								<AddIcon />
								En savoir plus
							</IconButton>
						</CardActions>
					</Card>
				))}
			</Stack>
		</Grid>
	);
};
export default Projects;
