const dataEHora = document.querySelector(".heading");
const date = new Date();

const selecionarDiaDaSemana = (dia) => {
  switch (dia) {
    case 0:
      return "Domingo";
    case 1:
      return "Segunda-Feira";
    case 2:
      return "Terça-Feira";
    case 3:
      return "Quarta-Feira";
    case 4:
      return "Quinta-Feira";
    case 5:
      return "Sexta-Feira";
    case 6:
      return "Sabado";
    default:
      console.log("Erro");
      break;
  }
};

const selecionarMes = (mes) => {
  switch (mes) {
    case 0:
      return "Janeiro";
    case 1:
      return "Fevereiro";
    case 2:
      return "Março";
    case 3:
      return "Abril";
    case 4:
      return "Maio";
    case 5:
      return "Junho";
    case 6:
      return "Julho";
    case 7:
      return "Agosto";
    case 8:
      return "Setembro";
    case 9:
      return "Outubro";
    case 10:
      return "Novembro";
    case 11:
      return "Dezembro";
    default:
        console.log('Erro')
      break;
  }
};

const formatarZero = (elemento) => {
    return elemento >= 10 ? elemento : `0${elemento}`
}

const formatarDataEHora = () => {
  const diaDaSemana = selecionarDiaDaSemana(date.getDay());
  const dia = formatarZero(date.getDate());
  const mes = selecionarMes(date.getMonth());
  const ano = date.getFullYear()
  const hora = formatarZero(date.getHours())
  const minutos = formatarZero(date.getMinutes())

  return `${diaDaSemana}, ${dia} de ${mes} de ${ano} ${hora}:${minutos}`
};

const dataEHoraFormatada = formatarDataEHora();
dataEHora.innerHTML = dataEHoraFormatada
