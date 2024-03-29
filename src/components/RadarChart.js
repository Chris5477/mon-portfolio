import { Text, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart } from "recharts";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { langages } from "../utils/langages";

const RadarChartComponent = () => {
	const renderPolarAngleAxis = ({ payload, x, y, cx, cy, ...rest }) => {
		return (
			<Text {...rest} verticalAnchor="middle" y={y + (y - cy) / 18} x={x + (x - cx) / 18}>
				{payload.value}
			</Text>
		);
	};

	return (
		<Grid
			height={800}
			width="100%"
			item
			display={"flex"}
			flexDirection="column"
			justifyContent="center"
			alignItems={"flex-start"}
			md={6}
		>
			<Typography
				sx={{ backgroundColor: "#004ba0", color: "#FFF", padding: "7px 12px", marginLeft: "20px" }}
				variant="h1"
			>
				Mes compétences
			</Typography>
			<RadarChart outerRadius={200} width={600} height={600} data={langages}>
				<PolarGrid stroke="#004ba0" />
				<PolarAngleAxis
					tick={(props) => renderPolarAngleAxis(props)}
					stroke="#004ba0"
					fontSize={20}
					fontWeight={800}
					dataKey="subject"
				/>
				<PolarRadiusAxis angle={30} domain={[0, 100]} />
				<Radar name="Langages" dataKey="A" stroke="#63a4ff" fill="#1976d2" fillOpacity={0.8} />
				<Radar name="Langages" dataKey="B" stroke="#63a4ff" fill="#ellow" fillOpacity={0.8} />
			</RadarChart>
		</Grid>
	);
};
export default RadarChartComponent;
