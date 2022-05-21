import { AppBar, Avatar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import chris from "../assets/pictures/chrispng.png"

const TopBar = () => {
	return (
		<AppBar position="static">
			<Avatar alt="christopher Petitcolas" src={chris} />
			<MenuIcon />
		</AppBar>
	);
};
export default TopBar;
