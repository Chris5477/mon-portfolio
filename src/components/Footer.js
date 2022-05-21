import { useState } from "react";
import { BottomNavigation, BottomNavigationAction} from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";

const Footer = () => {
	const [value, setValue] = useState("");

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<BottomNavigation sx={{ width: "100%" }} value={value} onChange={handleChange}>
			<BottomNavigationAction label="cv" value="Mon CV" icon={<FileDownloadIcon />} />
			<BottomNavigationAction label="linkedin" value="Linkedin" icon={<LinkedInIcon />} />
			<BottomNavigationAction label="github" value="Github" icon={<GitHubIcon />} />
			<BottomNavigationAction label="site" value="Welovedevs" icon={<LanguageIcon />} />
		</BottomNavigation>
	);
};
export default Footer;
