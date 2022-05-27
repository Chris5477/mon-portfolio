import { Grid, Typography, Button } from "@mui/material";
import { useEffect } from "react";
import { presentation } from "../utils/presentation";
import CloseIcon from "@mui/icons-material/Close";

const Information = ({ index, setModal }) => {
	const { title, description, picture } = presentation[index];
	useEffect(() => {
		document.querySelector(".description").innerHTML = description.replaceAll("*", "<br/><br/>");
	});
	return (
		<Grid container pl={3} pr={2} sx={{ backgroundColor: "#FFF" }}>
			<Button
				variant="text"
				sx={{ position: "absolute", top: "2%", right: "4%", borderRadius: "100px" }}
				onClick={() => setModal(false)}
			>
				<CloseIcon fontSize="large" />
			</Button>
			<Grid item xs={12} className="slideY-one" mt={2} mb={1} sx={{ opacity: 0 }}>
				<Typography color="primary" className="title" variant="h1">
					{title}
				</Typography>
			</Grid>
			<Grid item xs={12} md={7} className="slideY-two" sx={{ opacity: 0 }} mb={7}>
				<Typography className="description" paragraph maxWidth={800}>
					{description}
				</Typography>
			</Grid>
			{window.innerWidth > 600 && (
				<Grid item md={5} width={100}>
					<img className="picture-about slideY-three" src={picture} alt="illustration" />
				</Grid>
			)}
		</Grid>
	);
};
export default Information;
