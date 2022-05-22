import { Grid, Stack, Typography, Card, CardContent, CardHeader, CardActions, Button, Divider } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const Content = ({ title, list }) => {
	const styleCard = {
		backgroundColor: "grey",
		width: "250px",
		height: "350px",
		borderRadius: "8px",
		borderRadius: "12px",
		position: "relative",
	};

	const styleFooterCard = {
		position: "absolute",
		bottom: "2%",
		left: "2%",
	};

	const isDescription = list.find((el) => el.github) ? true : false;

	return (
		<Grid container mt={20} mb={10} sx={{ overflow: "hidden" }}>
			<Grid item xs={12} justifyContent="center">
				<Typography variant="h1" fontSize={"50px"} color="primary" pl={3} mb={5}>
					{title}
				</Typography>
			</Grid>
			<Stack direction="row" height="400px" pl={3} pt={2} pb={2} spacing={4}>
				{list.map(({ id, title, description }) => (
					<Card key={id} sx={styleCard}>
						<CardHeader
							title={id < 10 ? `0${id}` : id}
							titleTypographyProps={{ fontSize: "60px", paddingLeft: "20px" }}
						/>
						<Divider variant="middle" />
						<CardContent>
							<Typography variant="h5" mb={2}>
								{title}
							</Typography>
							<Typography paragraph>{isDescription && description}</Typography>
						</CardContent>
						<CardActions disableSpacing sx={styleFooterCard}>
							<Button variant="contained" sx={{ paddingLeft: "5px" }}>
								<AddIcon />
								Plus
							</Button>
						</CardActions>
					</Card>
				))}
			</Stack>
		</Grid>
	);
};
export default Content;
