const setPos = (value) => Math.trunc(Math.random() * value);

export const createImg = (array) => {
	const img = document.createElement("img");
	document.body.append(img);
	img.className = "react";
	img.setAttribute("src", array[setPos(3)]);
	img.setAttribute("alt", "react");
	const posX = `${setPos(80) + 10}%`;
	const posY = `${setPos(80) + 10}%`;
	img.style.top = posX;
	img.style.left = posY;
	setTimeout(() => img.remove(), 4000);
};
