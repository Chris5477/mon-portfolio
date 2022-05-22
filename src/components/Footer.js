import { Stack, IconButton, Typography } from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import { saveFile } from "../utils/downloadFile";

const Footer = () => {
	return (
		<footer>
			<Stack direction={"row"} justifyContent={window.innerWidth < 600 ? "space-around" : "center"} spacing={2}>
				<IconButton color="primary" aria-label="Télécharger CV" onClick={saveFile}>
					<Stack alignItems="center">
						<FileDownloadIcon />
						<Typography color="primary" variant="subtitle2" fontSize={5}>
							Télécharger CV
						</Typography>
					</Stack>
				</IconButton>
				<IconButton color="primary" aria-label="Lien linkedin">
					<LinkedInIcon />
				</IconButton>
				<IconButton color="primary" aria-label="Lien Github">
					<GitHubIcon />
				</IconButton>
				<IconButton color="primary" aria-label="Lien WelovesDev">
					<LanguageIcon />
				</IconButton>
			</Stack>
		</footer>
	);
};
export default Footer;
