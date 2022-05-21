import { Grid, Typography } from "@mui/material";
import me from "../assets/pictures/chrispng.png"

const Home = () => {
	return (
		<Grid container>
			<Grid item xs={12}>
				<img src={me} alt="profil" />
			</Grid>
			<Grid item>
				<Typography variant="h2">
					Christopher <br /> Petitcolas
				</Typography>

				<ul>
					<li>
						<Typography paragraph>
						Développeur Front-end spécialisé React
						</Typography>
					</li>
					<li>
						<Typography paragraph>
						Jeune diplômé Développeur Front-end
						</Typography>
					</li>
					<li>
						<Typography paragraph>
							En cours d'apprentissage de Node.js, MUI Component ou encore Typescript
						</Typography>
					</li>
				</ul>
			</Grid>
		</Grid>
	);
};
export default Home;
