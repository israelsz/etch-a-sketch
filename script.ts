function changeColor(this: HTMLElement){
    this.style.backgroundColor = "#000000";
}

function generateGrid(){
    for (let i = 0; i < 256; i++) {
        let square = document.createElement("div");
        square.classList.add("square");
        square.addEventListener("mouseover", changeColor);
        square.addEventListener("click", changeColor);
        container?.appendChild(square);
    }
}

function wipeGrid() {
    if(container){
        container.innerHTML = "";
    }
    generateGrid();
}

const container = document.querySelector(".container");
const btnClear = document.querySelector("#btnClear");

btnClear?.addEventListener("click", wipeGrid);
generateGrid();

