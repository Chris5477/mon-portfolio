import { Box, Button, Typography, Stack } from "@mui/material";
import { listLinks } from "../utils/listsLinks";
import HomeIcon from '@mui/icons-material/Home';
import WebIcon from '@mui/icons-material/Web';
import InfoIcon from '@mui/icons-material/Info';

const Menu = ({ classComponent, setterModal }) => {
	return (
		<Box className={classComponent}>
			<Button
				variant="contained"
				color="primary"
				sx={{ position: "absolute", top: "2%", right: "2%" }}
				onClick={() => setterModal(false)}
			>
				X
			</Button>
			<Stack spacing={2}>
				<Button aria-label="aller sur homepage" >
					<Stack direction="row" justifyContent="flex-start" alignItems="center" spacing={2} width="30%">
						<HomeIcon />
						Home
					</Stack>
				</Button>
				<Button aria-label="aller sur projets" >
					<Stack direction="row" justifyContent="flex-start" alignItems="center" spacing={2} width="30%">
						<WebIcon />
						Mes projets
					</Stack>
				</Button>
				<Button aria-label="aller sur about" >
					<Stack direction="row" justifyContent="flex-start" alignItems="center" spacing={2} width="30%">
						<InfoIcon />
						À propos de moi 
					</Stack>
				</Button>

				{listLinks.map(({ id, icon, title, url, handleClick }) => (
					<Button key={id} aria-label="Télécharger CV" href={url} onClick={handleClick && handleClick}>
						<Stack direction="row" justifyContent="flex-start" alignItems="center" spacing={2} width="30%">
							{icon}
							{title}
						</Stack>
					</Button>
				))}
			</Stack>
			<Typography
				width="100%"
				textAlign="center"
				variant="body2"
				fontSize={16}
				sx={{ position: "absolute", bottom: "2%", left: "50%", transform: "translateX(-50%)" }}
			>
				Application React -- Mui Component -- 2022
			</Typography>
		</Box>
	);
};
export default Menu;
