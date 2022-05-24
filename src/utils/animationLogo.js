const setPos = (value) => Math.trunc(Math.random() * value )


export const createImg = (array) => {
    const img = document.createElement("img");
    document.querySelector(".App").append(img);
    img.className = "react";
    img.setAttribute("src", array[setPos(3)]);
    img.setAttribute("alt", "react");
    const posX = `${setPos(window.innerWidth)}px`;
    const posY = `${setPos(window.innerHeight / 2)}px`;
    img.style.top = posX;
    img.style.left = posY;
    setTimeout(() => img.remove(), 12000);
};
