const paragrafos = document.querySelectorAll('p');
const backgroundColor = getComputedStyle(document.body).backgroundColor;

for (const p of paragrafos) {
    p.style.backgroundColor = backgroundColor;
    p.style.color = '#FFF';
}