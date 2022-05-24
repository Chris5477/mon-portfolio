import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import AttachmentIcon from "@mui/icons-material/Attachment";
import LanguageIcon from "@mui/icons-material/Language";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import { saveFile } from "../utils/downloadFile";

export const listLinks = [
	{
		id: 1,
		icon: <LinkedInIcon sx={{ mr: 3 }} />,
		title: "Linkedin",
		url: "https://www.linkedin.com/in/christopher-petitcolas/",
	},
	{
		id: 2,
		icon: <GitHubIcon sx={{ mr: 3 }} />,
		title: "Github",
		url: "https://github.com/Chris5477",
	},
	{
		id: 3,
		icon: <LanguageIcon sx={{ mr: 3 }} />,
		title: "WeLovesDevs",
		url: "https://christopherpetitcola.welovedevs.com",
	},
	// {
	// 	id: 4,
	// 	icon: <AttachmentIcon sx={{ mr: 3 }} />,
	// 	title: "Mon C-V",
	// 	handleClick: saveFile,
	// },
	// {
	// 	id: 5,
	// 	icon: <ContactMailIcon sx={{ mr: 3 }} />,
	// 	title: "Contact",
	// 	url : 'mailto:petitcolaschristopher@gmail.com'
	// },
];
