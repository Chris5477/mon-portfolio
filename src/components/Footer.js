import { Stack, IconButton, BottomNavigation, BottomNavigationAction } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import WebIcon from "@mui/icons-material/Web";
import InfoIcon from "@mui/icons-material/Info";
import { useState } from "react";

const Footer = ({ handleClick }) => {
	const [value, setValue] = useState("home");

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<BottomNavigation value={value} onChange={handleChange}>
			<BottomNavigationAction label="Home" value="home" icon={<HomeIcon />} onClick={() => handleClick(0)} />
			<BottomNavigationAction label="Projets" value="projets" icon={<WebIcon />} onClick={() => handleClick(1)} />
			<BottomNavigationAction label="About" value="about" icon={<InfoIcon />} onClick={() => handleClick(2)} />
		</BottomNavigation>
	);
};

export default Footer;
