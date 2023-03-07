const pesoInput = document.querySelector('.peso')
const alturaInput = document.querySelector('.altura')
const form = document.querySelector('.form')
const resultado = document.querySelector('.resultado-imc')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const imc = pesoInput.value / Math.pow(alturaInput.value, 2);
    console.log(imc)

    let mensagem = ''
    
    if (imc < 18.5) {
        mensagem = 'Abaixo do Peso'
    } else if (imc < 24.9) {
        mensagem = 'Peso Normal'
    } else if (imc < 29.9) {
        mensagem = 'Sobrepeso'
    } else if (imc < 34.9) {
        mensagem = 'Obesidade Grau 1'
    } else if (imc < 39.9) {
        mensagem = 'Obesidade Grau 2'
    } else {
        mensagem = 'Obesidade Grau 3'
    }

    resultado.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)} (${mensagem})</p>`
})