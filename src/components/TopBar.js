import { AppBar, Avatar, IconButton, Box, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import react from "../assets/icon/react.svg"
import {useState} from "react"

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



const TopBar = () => {

	const [open, setOpen] = useState(false)

	const classMenu = open ? "openModal" : "closeModal"


	return (
		<AppBar position="static" sx={styleAppBar}>
			<Avatar alt="react" src={react} />
			<IconButton onClick={() => setOpen(true)}>
				<MenuIcon color="primary" />
			</IconButton>
			<Box className={classMenu}>
				<Button variant="contained" color="primary" onClick={() => setOpen(false)}>XxxxxxxxxxxxxxxxxxXX</Button>
			</Box>
		</AppBar>
	);
};
export default TopBar;
