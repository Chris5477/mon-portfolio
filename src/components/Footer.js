import { Stack, IconButton, Typography } from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";

const Footer = () => {
	return (
		<Stack direction={"row"} justifyContent="space-around" spacing={5}>
			<IconButton color="primary" aria-label="Télécharger CV">
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
	);
};
export default Footer;

/*

	const [value, setValue] = useState("");

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
<BottomNavigation sx={{ width: "100%" }} value={value} onChange={handleChange}>
			<BottomNavigationAction color="primary" label="cv" value="Mon CV" icon={<FileDownloadIcon />} />
			<BottomNavigationAction color="primary" label="linkedin" value="Linkedin" icon={<LinkedInIcon />} />
			<BottomNavigationAction color="primary" label="github" value="Github" icon={<GitHubIcon />} />
			<BottomNavigationAction color="primary" label="site" value="Welovedevs" icon={<LanguageIcon />} />
		</BottomNavigation>*/
