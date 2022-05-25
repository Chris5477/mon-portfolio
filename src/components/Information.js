import { Grid, Typography, Button } from "@mui/material";
import { useEffect } from "react";
import { presentation } from "../utils/presentation";

const Information = ({ index, setModal }) => {
	const { title, description } = presentation[index];
	useEffect(() => {
		document.querySelector(".description").innerHTML = description.replaceAll("*", "<br/><br/>");
	});
	return (
		<Grid container pl={3} pr={2} >
			<Button
				variant="contained"
				sx={{ position: "absolute", top: "2%", right: "4%", borderRadius: "100px" }}
				onClick={() => setModal(false)}
			>
				X
			</Button>
			<Grid item xs={12} className="slideY-one" mt={8} mb={5} sx={{ opacity: 0 }}>
				<Typography  color="primary" variant="h1"  >
					{title}
				</Typography>
			</Grid>
			<Grid item xs={12} className="slideY-two" sx={{ opacity: 0 }} mb={7}>
				<Typography className="description" paragraph maxWidth={800}>
					{description}
				</Typography>
			</Grid>
		</Grid>
	);
};
export default Information;
