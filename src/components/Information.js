import {Grid, Typography} from "@mui/material"
import { presentation } from "../utils/presentation";

const Information = () => {
	const {title, description} = presentation[0]
	return (
		<Grid container>
			<Grid item>
				<Typography variant="h1">{title}</Typography>
			</Grid>
			<Grid item>
				<Typography paragraph>
					{description}
				</Typography>
			</Grid>
		</Grid>
	);
};
export default Information;
