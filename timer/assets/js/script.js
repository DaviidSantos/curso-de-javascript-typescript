const timer = document.querySelector(".timer");
const iniciar = document.querySelector(".iniciar");
const parar = document.querySelector(".parar");
const zerar = document.querySelector(".zerar");

let segundos = 0;
let relogio;

const criarTimerPorSegundos = (segundos) => {
  const data = new Date(segundos * 1000);
  return data.toLocaleTimeString("pt-BR", {
    hour12: false,
    timeZone: "GMT",
  });
};

const iniciaTimer = () => {
  relogio = setInterval(() => {
    segundos++;
    timer.innerHTML = criarTimerPorSegundos(segundos);
  }, 1000);
};

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('iniciar')) {
    timer.style.color = 'black';
    clearInterval(relogio);
    iniciaTimer();
  } else if (e.target.classList.contains('parar')) {
    clearInterval(relogio);
    timer.style.color = 'red';
  } else if (e.target.classList.contains('zerar')) {
    timer.style.color = 'black';
    clearInterval(relogio);
    segundos = 0;
    timer.innerHTML = "00:00:00";
  }
})