const items = document.querySelectorAll(".item");
const dots = document.querySelectorAll(".dot");
const number = document.querySelector(".numbers");

let index = 0;

document.getElementById("next").onclick = () => {
    index = (index + 1) % items.length;
    update();
};

document.getElementById("prev").onclick = () => {
    index = (index - 1 + items.length) % items.length;
    update();
};

function update() {
    items.forEach(i => i.classList.remove("active"));
    dots.forEach(d => d.classList.remove("active"));

    items[index].classList.add("active");
    dots[index].classList.add("active");

    number.textContent = `0${index + 1}`;
}