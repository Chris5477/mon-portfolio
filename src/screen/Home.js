import { Grid, Typography } from "@mui/material";

const Home = () => {
	return (
		<Grid container>
			<Grid item>
				<img src="" alt="profil" />
			</Grid>
			<Grid item>
				<Typography variant="h2">
					Lorem <br /> ipsum.
				</Typography>

				<ul>
					<li>
						<Typography paragraph>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus enim cumque est dignissimos
						</Typography>
					</li>
					<li>
						<Typography paragraph>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus enim cumque est dignissimos
						</Typography>
					</li>
					<li>
						<Typography paragraph>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus enim cumque est dignissimos
						</Typography>
					</li>
				</ul>
			</Grid>
		</Grid>
	);
};
export default Home;
