import { createTheme } from "@mui/material/styles";


export const theme = createTheme({
	breakpoints: {
		values: {
			mobile: 498,
			tablette: 998,
		},
	},
	components: {
		MuiAppBar: {
			styleOverrides: {
				root: {
					backgroundColor: "#0a2e47",
					color: "#5eafe8",
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-between",
					alignItems: "center",
					paddingLeft: 10,
					height: 68,
				},
			},
		},
		MuiTypography: {
			styleOverrides: {
				root: {
					color: "#1e87d1",
				},
			},
		},
		MuiAccordion: {
			styleOverrides: {
				root: {
					width: "95%",
					height: "auto",
					backgroundColor: "#FFF",
					color: "#1e87d1",
					border: "1px solid #1e87d1",
				},
			},
		},
		MuiAccordionSummary: {
			styleOverrides: {
				root: {
					backgroundColor: "#1e87d1",
					color: "#FFF",
					border: "1px solid #1e87d1",
				},
			},
		},
		MuiAccordionDetails: {
			styleOverrides: {
				root: {
					backgroundColor: "#FFF",
					color: "#1e87d1",
					border: "1px solid #1e87d1",
					padding: "15px",
				},
			},
		},
	},
	palette: {
		primary: {
			main: "#1e87d1",
			light: "#5eafe8",
			dark: "#0a2e47",
		},
		background: {
			paper: "#f3f3f7",
		},
		secondary: {
			main: "#75a6c4",
			light: "#e2edf3",
			dark: "#3d718f",
		},
	},
	typography: {
		h1: {
			fontWeight: 700,
			fontSize: window.innerWidth / 100 + 24,
		},
		h2: {
			fontWeight: 400,
			fontSize: window.innerWidth / 100 + 20,
		},
		h3: {
			fontWeight: 500,
			fontSize: window.innerWidth / 100 + 18,
		},
		h4: {
			fontWeight: 500,
			fontSize: window.innerWidth / 100 + 16,
		},
		h5: {
			fontWeight: 400,
			fontSize: window.innerWidth / 100 + 10,
		},
		body1: {
			fontWeight: 600,
			fontSize: window.innerWidth / 100 + 8,
			padding: "10px",
		},
	},
});
