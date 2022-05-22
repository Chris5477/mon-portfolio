import { AppBar, Avatar, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import react from "../assets/icon/react.svg"

const TopBar = () => {
	const styleAppBar = {
		width : "100%",
		backgroundColor: "transparent",
		display : "flex",
		flexDirection : "row",
		justifyContent : "space-between",
		alignItems : "center",
		boxShadow : "none",
		padding : "10px 20px"
	};

	return (
		<AppBar position="static" sx={styleAppBar}>
			<Avatar alt="react" src={react} />
			<Box>
				<MenuIcon color="primary" />
			</Box>
		</AppBar>
	);
};
export default TopBar;
