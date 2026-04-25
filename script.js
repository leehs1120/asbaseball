let slides = document.querySelectorAll(".slide");
let index = 0;

function show(i) {
    slides.forEach(s => s.classList.remove("active"));
    slides[i].classList.add("active");
}

document.querySelector(".next").onclick = () => {
    index = (index + 1) % slides.length;
    show(index);
};

document.querySelector(".prev").onclick = () => {
    index = (index - 1 + slides.length) % slides.length;
    show(index);
};

setInterval(() => {
    index = (index + 1) % slides.length;
    show(index);
}, 3000);
