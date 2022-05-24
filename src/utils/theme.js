import { createTheme } from "@mui/material/styles";

export const theme = (colorPalette) =>
	createTheme({
		components: {
			MuiAppBar: {
				styleOverrides: {
					root: {
						width: "100%",
						backgroundColor: "transparent",
						display: "flex",
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						boxShadow: "none",
						padding: "10px 20px",
					},
				},
			},

			MuiBottomNavigation: {
				styleOverrides: {
					root: {
						backgroundColor: "rgb(223, 223, 223)",
						width: "100%",
						position: "fixed",
						bottom: 0,
					},
				},
			},
			MuiButton: {
				defaultProps: {
					color: colorPalette,
					variant: "outlined",
				},
			},
			MuiIconButton: {
				defaultProps: {
					color: colorPalette,
				},
			},
			MuiCard: {
				styleOverrides: {
					root: {
						backgroundColor: "#FFF",
						boxShadow: "2px 2px 10px black",
						width: 250,
						height: 350,
						borderRadius: "20px",
						position: "relative",
					},
				},
			},
			MuiCardHeader: {
				defaultProps: {
					titleTypographyProps: {
						fontSize: "60px",
						paddingLeft: "20px",
					},
				},
			},
			MuiCardActions: {
				styleOverrides: {
					root: {
						position: "absolute",
						bottom: 6,
						left: 6,
					},
				},
			},
		},
		palette: {
			primary: {
				main: "#1976d2",
				light: "#63a4ff",
				dark: "#004ba0",
			},
			secondary: {
				main: "#90d1f4",
				light: "#c3ffff",
				dark: "#5da0c1",
			},
		},
	});
