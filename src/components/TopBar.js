import { AppBar, Avatar, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import react from "../assets/icon/react.svg";
import { useState } from "react";
import Menu from "./Menu";

const TopBar = () => {
	const [open, setOpen] = useState(false);

	const classMenu = open ? "openModal" : "closeModal";

	return (
		<AppBar position="static">
			<Avatar className="rotate" alt="react" src={react} />
			<IconButton onClick={() => setOpen(true)}>
				<MenuIcon />
			</IconButton>
			<Menu classComponent={classMenu} setterModal={setOpen} />
		</AppBar>
	);
};
export default TopBar;
