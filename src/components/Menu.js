import { Box, Grid, Button, Typography, Stack, makeStyles } from "@mui/material";
import { listLinks } from "../utils/listsLinks";
import { saveFile } from "../utils/downloadFile";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import CloseIcon from "@mui/icons-material/Close";
import { theme } from "../utils/theme";

const Menu = ({ classComponent, setterModal }) => {
	return (
		<Box className={classComponent}>
			<Grid container spacing={3} pl={5}>
				<Button color="secondary" variant="text" sx={{ position: "absolute", top: "2%", right: "2%" }} onClick={() => setterModal(false)}>
					<CloseIcon fontSize="large" />
				</Button>

				<Grid item xs={12}>
					<Typography variant="h2">Menu</Typography>
				</Grid>

				<Grid item xs={12}>
					<Typography variant="h3" mb={2}>
						Réseaux sociaux
					</Typography>
					<Stack justifyContent={"space-around"} alignItems="center" width={"50%"}>
						{listLinks.map(({ id, icon, title, url}) => (
							<Button color="secondary" fullWidth key={id} href={url} sx={{ margin: "10px 0" }}>
								<Stack direction="row" justifyContent="flex-start" alignItems="center" spacing={2} width="100%">
									{icon}
									{title}
								</Stack>
							</Button>
						))}
					</Stack>
				</Grid>
				<Grid item xs={12}>
					<Typography variant="h3" mb={2}>
						Me contacter
					</Typography>
					<Typography paragraph>Par téléphone :</Typography>

					<Button color="secondary" href="tel:+0626411949">
						<Stack direction="row" justifyContent="flex-start" alignItems="center" spacing={2} width="100%">
							<CallIcon />
							<Typography paragraph ml={2}>
								06-26-41-19-49
							</Typography>
						</Stack>
					</Button>

					<Typography mt={2} paragraph>Par e-mail </Typography>
					<Button color="secondary" href="mailto:petitcolaschristopher@gmail.com">
						<Stack direction="row" justifyContent="flex-start" alignItems="center" spacing={2} width="100%">
							<EmailIcon />
							<Typography paragraph ml={2}  mb={2}>
								Email
							</Typography>
						</Stack>
					</Button>
				</Grid>

				<Grid item xs={12}>
					<Typography variant="h3" mb={2}>
						Télécharger mon CV
					</Typography>

					<Button color="secondary" onClick={saveFile}>Télécharger</Button>
				</Grid>

				<Typography
					width="80%"
					textAlign="center"
					variant="body2"
					fontSize={16}
					sx={{ position: "absolute", bottom: "8%", left: "50%", transform: "translateX(-50%)" }}
				>
					Application React -- Mui Component -- 2022
				</Typography>
			</Grid>
		</Box>
	);
};
export default Menu;
