import { Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import { presentation } from "../utils/presentation";

const Information = () => {
	const { title, description } = presentation[6];
	useEffect(() => {
		document.querySelector("p").innerHTML = description.replaceAll("*", "<br/><br/>");
	});
	return (
		<Grid container pl={3} pr={2}>
			<Grid item xs={12} className="slideY-one" mt={5} mb={5} sx={{ opacity: 0 }}>
				<Typography color="primary" variant="h1" fontSize={"50px"}>
					{title}
				</Typography>
			</Grid>
			<Grid item xs={12} className="slideY-two" sx={{ opacity: 0 }}>
				<Typography paragraph>{description}</Typography>
			</Grid>
		</Grid>
	);
};
export default Information;
