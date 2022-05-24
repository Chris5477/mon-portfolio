import { AppBar, Avatar, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import react from "../assets/icon/react.svg";
import { useState } from "react";
import Menu from "./Menu";
import { borderRadius } from "@mui/system";

const TopBar = () => {
	const [open, setOpen] = useState(false);

	const classMenu = open ? "openModal" : "closeModal";
	console.log(classMenu, open);

	return (
		<AppBar position="static" >
			<Avatar alt="react" src={react} />
			<IconButton onClick={() => setOpen(true)}>
				<MenuIcon />
			</IconButton>
			<Menu classComponent={classMenu} setterModal={setOpen} />
		</AppBar>
	);
};
export default TopBar;
