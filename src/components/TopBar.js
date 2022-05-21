import { AppBar, Avatar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const TopBar = () => {
	return (
		<AppBar position="static">
			<Avatar alt="Remy Sharp" src="." />
			<MenuIcon />
		</AppBar>
	);
};
export default TopBar;
