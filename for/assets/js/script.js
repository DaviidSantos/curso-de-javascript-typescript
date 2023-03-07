const container = document.querySelector('.container')

const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
]

const criarElementos = () => {
    const mainDiv = document.createElement('div');

    for (let i = 0; i < elementos.length; i++) {
        const element = document.createElement(elementos[i].tag);
        element.innerHTML = elementos[i].texto;

        mainDiv.appendChild(element);
    }

    container.appendChild(mainDiv);
}

criarElementos();
