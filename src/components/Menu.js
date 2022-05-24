import { Box, Grid, Button, Typography, Stack } from "@mui/material";
import { listLinks } from "../utils/listsLinks";
import HomeIcon from "@mui/icons-material/Home";
import WebIcon from "@mui/icons-material/Web";
import InfoIcon from "@mui/icons-material/Info";

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
					<Button fullWidth aria-label="aller sur homepage">
						<Stack direction="row" justifyContent="flex-start" alignItems="center" spacing={2} fontSize={20} width="80%">
							<HomeIcon />
							Home
						</Stack>
					</Button>
				</Grid>
				<Grid item xs={12}>
					<Button fullWidth aria-label="aller sur projets">
						<Stack direction="row" justifyContent="flex-start" alignItems="center" spacing={2} fontSize={20} width="80%">
							<WebIcon />
							Mes projets
						</Stack>
					</Button>
				</Grid>
				<Grid item xs={12}>
					<Button fullWidth aria-label="aller sur about">
						<Stack direction="row" justifyContent="flex-start" alignItems="center" spacing={2} fontSize={20} width="80%">
							<InfoIcon />À propos de moi
						</Stack>
					</Button>
				</Grid>
				<Grid item xs={12}>
					{listLinks.map(({ id, icon, title, url, handleClick }) => (
						<Button fullWidth key={id} aria-label="Télécharger CV" href={url} onClick={handleClick && handleClick}>
							<Stack direction="row" justifyContent="flex-start" alignItems="center" spacing={2} fontSize={20} width="80%">
								{icon}
								{title}
							</Stack>
						</Button>
					))}
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
