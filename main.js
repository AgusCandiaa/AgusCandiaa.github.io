const carrusel = document.querySelector(".carrusel-items");
let maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth;
let intervalo = null;
let step = 1;

const start = () => {
  intervalo = setInterval(function () {
    carrusel.scrollLeft = carrusel.scrollLeft + step;
    if (carrusel.scrollLeft === maxScrollLeft) {
      step = step * -1;
    } else if (carrusel.scrollLeft === 0) {
      step = step * -1;
    }
  }, 15);
};

const stop = () => {
  clearInterval(intervalo);
};

carrusel.addEventListener("mouseover", () => {
  stop();
});

carrusel.addEventListener("mouseout", () => {
  start();
});

start();

const carrusel1 = document.querySelector(".carrusel-items1");
let maxScrollLeft1 = carrusel1.scrollWidth - carrusel1.clientWidth;
let intervalo1 = null;
let step1 = -1;

const start1 = () => {
  intervalo1 = setInterval(function () {
    carrusel1.scrollLeft = carrusel1.scrollLeft + step1;
    if (carrusel1.scrollLeft === maxScrollLeft1) {
      step1 = step1 * -1;
    } else if (carrusel1.scrollLeft === 0) {
      step1 = step1 * -1;
    }
  }, 20);
};

const stop1 = () => {
  clearInterval(intervalo1);
};

carrusel1.addEventListener("mouseover", () => {
  stop1();
});

carrusel1.addEventListener("mouseout", () => {
  start1();
});

start1();

const carrusel2 = document.querySelector(".carrusel-items2");
let maxScrollLeft2 = carrusel2.scrollWidth - carrusel2.clientWidth;
let intervalo2 = null;
let step2 = 1;

const start2 = () => {
  intervalo2 = setInterval(function () {
    carrusel2.scrollLeft = carrusel2.scrollLeft + step2;
    if (carrusel2.scrollLeft === maxScrollLeft2) {
      step2 = step2 * -1;
    } else if (carrusel2.scrollLeft === 0) {
      step2 = step2 * -1;
    }
  }, 25);
};

const stop2 = () => {
  clearInterval(intervalo2);
};

carrusel2.addEventListener("mouseover", () => {
  stop2();
});

carrusel2.addEventListener("mouseout", () => {
  start2();
});

start2();

