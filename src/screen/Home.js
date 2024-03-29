import { Grid, Typography } from "@mui/material";
import me from "../assets/pictures/chrispng.png";
import RadarChartComponent from "../components/RadarChart";

const Home = () => {
	const radar = window.innerWidth > 900 && <RadarChartComponent />;

	return (
		<Grid container width="100%" pl={window.innerWidth > 600 ? 10 : 3} pr={2}>
			<Grid item xs={12} md={6}>
				<Grid item xs={12}>
					<img className="profil" src={me} alt="profil" />
				</Grid>
				<Grid item xs={12} md={6} mt={10} mb={10}>
					<Typography color="primary" variant="h1" fontSize={"50px"} mb={4}>
						Christopher <br /> Petitcolas
					</Typography>

					<Typography mb={1}>Développeur Front-end spécialisé React</Typography>

					<Typography mb={1}>En recherche d'un CDD/ CDI ou alternance</Typography>
					<Typography mb={1}>Éligible à la prime de 8000 €</Typography>
				</Grid>
			</Grid>
			{radar}
		</Grid>
	);
};
export default Home;
