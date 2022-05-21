import { Grid, Stack, Typography, Card, CardContent, CardHeader, CardActions, IconButton } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { projects } from "../utils/listProject";

const Content = () => {
	return (
		<Grid container>
			<Grid item>
				<Typography variant="h2">Lorem ipsum dolor sit amet.</Typography>
			</Grid>
			<Stack width="auto" height="300px" direction="row" justifyContent={"space-around"}>
				{projects.map(({ id, title, description }) => (
					<Card key={id} sx={{ width: 200, height: "500px" }}>
						<CardHeader title={id} />
						<CardContent>
							<Typography>{title}</Typography>
							<Typography variant="body2">{description}</Typography>
						</CardContent>
						<CardActions disableSpacing>
							<IconButton aria-label="add to favorites">
								<VisibilityIcon />
								Voir
							</IconButton>
						</CardActions>
					</Card>
				))}
			</Stack>
		</Grid>
	);
};
export default Content;
