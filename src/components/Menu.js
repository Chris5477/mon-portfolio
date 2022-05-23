import { Button} from "@mui/material"

const Menu = ({setterModal}) => {
	return (
		<>
			<h1>Menu</h1>
			<Button variant="contained" color="primary" onClick={() => setterModal(false)}>
				X
			</Button>
		</>
	);
};
export default Menu;
