var container = document.querySelector(".container");
function changeColor() {
    this.style.backgroundColor = "#000000";
}
for (var i = 0; i < 256; i++) {
    var square = document.createElement("div");
    square.classList.add("square");
    square.addEventListener("mouseover", changeColor);
    container === null || container === void 0 ? void 0 : container.appendChild(square);
}
