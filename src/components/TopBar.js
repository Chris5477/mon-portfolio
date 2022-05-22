import { AppBar, Avatar, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import chris from "../assets/pictures/chrispng.png";

const TopBar = () => {
	const styleAppBar = {
		width : "100%",
		backgroundColor: "transparent",
		display : "flex",
		flexDirection : "row",
		justifyContent : "space-between",
		alignItems : "center",
		boxShadow : "none",
		padding : "5px 20px"
	};

	return (
		<AppBar position="static" sx={styleAppBar}>
			<Avatar alt="christopher Petitcolas" src={chris} />
			<Box>
				<MenuIcon color="primary" />
			</Box>
		</AppBar>
	);
};
export default TopBar;
