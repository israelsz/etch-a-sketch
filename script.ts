const container = document.querySelector(".container");

function changeColor(this: HTMLElement){
    this.style.backgroundColor = "#000000";
}


for (let i = 0; i < 256; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    square.addEventListener("mouseover", changeColor);
    container?.appendChild(square);
}
