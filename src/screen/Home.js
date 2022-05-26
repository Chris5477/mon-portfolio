import { Grid, Typography } from "@mui/material";
import me from "../assets/pictures/chrispng.png";

const Home = () => {
	return (
		<Grid container width="100%" pl={window.innerWidth > 600 ? 20 : 3} pr={2}>
			<Grid item xs={12} >
				<img className="profil" src={me} alt="profil" />
			</Grid>
			<Grid item xs={12} mt={10} mb={10}>
				<Typography color="primary" variant="h1" fontSize={"50px"} mb={4}>
					Christopher <br /> Petitcolas
				</Typography>

				<Typography className="textHomePage" mb={1}>Développeur Front-end spécialisé React</Typography>

				<Typography className="textHomePage" mb={1}>Jeune diplômé Développeur Front-end</Typography>

				<Typography className="textHomePage" mb={1}>En d'apprentissage de Node.js, MUI Component et Typescript</Typography>
			</Grid>
		</Grid>
	);
};
export default Home;
