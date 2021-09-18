function changeColor() {
    this.style.backgroundColor = "#000000";
}
function generateGrid() {
    for (var i = 0; i < 256; i++) {
        var square = document.createElement("div");
        square.classList.add("square");
        square.addEventListener("mouseover", changeColor);
        container === null || container === void 0 ? void 0 : container.appendChild(square);
    }
}
function wipeGrid() {
    if (container) {
        container.innerHTML = "";
    }
    generateGrid();
}
var container = document.querySelector(".container");
var btnClear = document.querySelector("#btnClear");
btnClear === null || btnClear === void 0 ? void 0 : btnClear.addEventListener("click", wipeGrid);
generateGrid();
