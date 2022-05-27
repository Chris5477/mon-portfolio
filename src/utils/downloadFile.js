import fileSaver from "file-saver";

export const saveFile = () => {
	fileSaver.saveAs(process.env.PUBLIC_URL + "/assets/CVChristopherPetitcolas.pdf", "CVChristopherPetitcolas.pdf");
};
a