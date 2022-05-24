import { Box, Grid, Button, Typography, Stack } from "@mui/material";
import { listLinks } from "../utils/listsLinks";
import { saveFile } from "../utils/downloadFile";

const Menu = ({ classComponent, setterModal }) => {
	return (
		<Box className={classComponent}>
			<Grid container spacing={5}>
				<Button
					variant="contained"
					sx={{ position: "absolute", top: "2%", right: "2%" }}
					onClick={() => setterModal(false)}
				>
					X
				</Button>

				<Grid item xs={12}>
					{listLinks.map(({ id, icon, title, url, handleClick }) => (
						<Button fullWidth key={id} href={url}>
							<Stack
								direction="row"
								justifyContent="flex-start"
								alignItems="center"
								spacing={2}
								fontSize={20}
								width="80%"
							>
								{icon}
								{title}
							</Stack>
						</Button>
					))}
				</Grid>
				<Grid item xs={12}>
					<Typography>Me contacter :</Typography>

					<Button href="tel:+0626411949">Par téléphone : 06-26-41-19-49</Button>
					<Button href="mailto:petitcolaschristopher@gmail.com">Par e-mail : petitcolaschristopher@gmail.com </Button>
				</Grid>

				<Grid item xs={12}>
					<Typography>Télécharger mon CV :</Typography>
					<Button onClick={saveFile}>Télécharger</Button>
						
				</Grid>

				<Typography
					width="80%"
					textAlign="center"
					variant="body2"
					fontSize={16}
					sx={{ position: "absolute", bottom: "2%", left: "50%", transform: "translateX(-50%)" }}
				>
					Application React -- Mui Component -- 2022
				</Typography>
			</Grid>
		</Box>
	);
};
export default Menu;
