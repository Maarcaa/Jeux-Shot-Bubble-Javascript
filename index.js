const counterDisplay = document.querySelector("h3");
let counter = 0;
const bubbleMaker = () => {
const bubble = document.createElement("span");
// console.log(bubble);
bubble.classList.add("bubble");
document.body.appendChild(bubble);

// Avoir un chiffre random entre 0 et 1 on peut ensuite le manipuler ce chiffre
// console.log(Math.random() *200 +100);

const size = Math.random() *200 + 100 + "px";
// console.log(size);

bubble.style.height = size;
bubble.style.width = size;

bubble.style.top = Math.random() * 100 + 50 + "%";
bubble.style.left = Math.random() * 100 + "%";

const plusMinus = Math.random() > 0.5 ? 1 : -1;
bubble.style.setProperty('--left', Math.random() * 100 * plusMinus + "%");

bubble.addEventListener('click', () => {
    counter++;
    console.log(counter);
    counterDisplay.textContent = counter;
    bubble.remove();
})

setTimeout(() => {
bubble.remove();
}, 8000)
};

setInterval(bubbleMaker, 300);




console.log(counterDisplay);