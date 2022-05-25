import { AppBar, Avatar, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import react from "../assets/icon/react2.svg";
import Menu from "./Menu";

const TopBar = ({open, setOpen}) => {
	

	const classMenu = open && <Menu classComponent={"aaa"} setterModal={setOpen} />;

	return (
		<AppBar position="static">
			<Avatar className="rotate" alt="react" src={react} />
			<IconButton onClick={() => setOpen(true)}>
				<MenuIcon />
			</IconButton>
			{classMenu}
		</AppBar>
	);
};
export default TopBar;
