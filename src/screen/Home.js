import { Grid, Typography } from "@mui/material";
import me from "../assets/pictures/chrispng.png";

const Home = () => {
	return (
		<Grid container width="100%" pl={3} pr={2}>
			<Grid item xs={12} mt={5} mb={5}>
				<img className="profil" src={me} alt="profil" />
			</Grid>
			<Grid item xs={12} mt={10} mb={10}>
				<Typography variant="h1" fontSize={"50px"} mb={4}>
					Christopher <br /> Petitcolas
				</Typography>

				<ul>
					<li>
						<Typography variant={"body2"} mb={1}>
							Développeur Front-end spécialisé React
						</Typography>
					</li>
					<li>
						<Typography variant={"body2"} mb={1}>
							Jeune diplômé Développeur Front-end
						</Typography>
					</li>
					<li>
						<Typography variant={"body2"} mb={1}>
							En cours d'apprentissage de Node.js, MUI Component ou encore Typescript
						</Typography>
					</li>
				</ul>
			</Grid>
		</Grid>
	);
};
export default Home;
