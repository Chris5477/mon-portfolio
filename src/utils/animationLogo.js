const setPos = (value) => Math.trunc(Math.random() * value )


export const createImg = (array) => {
    const img = document.createElement("img");
    document.body.append(img);
    img.className = "react";
    img.setAttribute("src", array[setPos(3)]);
    img.setAttribute("alt", "react");
    const posX = `${setPos(80) + 5}%`;
    const posY = `${setPos(80) + 5}%`;
    img.style.top = posX;
    img.style.left = posY;
    setTimeout(() => img.remove(), 7000);
};
