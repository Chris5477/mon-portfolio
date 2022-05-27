import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import WebIcon from "@mui/icons-material/Web";
import InfoIcon from "@mui/icons-material/Info";
import { useState } from "react";

const Footer = ({ handleClick, setOpen, setPosCard, setModal }) => {
	const [value, setValue] = useState("home");

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const changePage = (page) => {
		handleClick(page);
		setOpen(false);
		setPosCard(0);
		setModal(false)
	};

	return (
		<BottomNavigation value={value} onChange={handleChange}>
			<BottomNavigationAction label="Home" value="home" icon={<HomeIcon />} onClick={() => changePage(0)} />
			<BottomNavigationAction label="Projets" value="projets" icon={<WebIcon />} onClick={() => changePage(1)} />
			<BottomNavigationAction label="About" value="about" icon={<InfoIcon />} onClick={() => changePage(2)} />
		</BottomNavigation>
	);
};

export default Footer;
