import { Stack, IconButton, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import WebIcon from "@mui/icons-material/Web";
import InfoIcon from "@mui/icons-material/Info";
import { saveFile } from "../utils/downloadFile";

const Footer = ({ handleClick }) => {
	return (
		<footer>
			<Stack direction={"row"} justifyContent={window.innerWidth < 600 ? "space-around" : "center"} spacing={2}>
				<IconButton aria-label="Aller Sur page d'accueil" onClick={() => handleClick(0)}>
					<HomeIcon />
				</IconButton>
				<IconButton aria-label="Aller sur projets page" onClick={() => handleClick(1)}>
					<WebIcon />
				</IconButton>
				<IconButton aria-label="Aller sur about page" onClick={() => handleClick(2)}>
					<InfoIcon />
				</IconButton>
			</Stack>
		</footer>
	);
};
export default Footer;
