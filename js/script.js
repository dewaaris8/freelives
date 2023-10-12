const caraousel = document.querySelector(".caraousel");
const firstImg = caraousel.querySelectorAll("img")[0];
const iconArrow = document.querySelectorAll(".icon");


let isDragStart = false, prevPageX, prevScrollLeft;
let firstImgWidth = firstImg.clientWidth + 14;

iconArrow.forEach(icon => {
    icon.addEventListener("click", () => {
        caraousel.scrollLeft += icon.id == "kiri" ? -firstImgWidth : firstImgWidth;
    });
});

const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = caraousel.scrollLeft, caraousel2.scrollLeft;
}

const dragging = (e) => {
    if(!isDragStart) return;
    e.preventDefault();
    caraousel.classList.add("dragging");
    let positionDiff = e.pageX - prevPageX;
    caraousel.scrollLeft = prevScrollLeft - positionDiff;
}

const dragStop = () => {
    isDragStart = false;
    caraousel.classList.remove("dragging");
}

caraousel.addEventListener("mousedown", dragStart);
caraousel.addEventListener("mousemove", dragging);
caraousel.addEventListener("mouseup", dragStop);

