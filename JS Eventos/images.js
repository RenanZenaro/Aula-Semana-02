// random gera um numero de 0 a 1, ex: 0.5
// floor arredonda para baixo
// *5 vai gerar um numero até 5.99, com floor, arredonda para 5
var num = Math.floor(Math.random() * 5);
var imagens = [
    'img/foto1.webp',
    'img/foto2.webp',
    'img/foto3.jpg',
    'img/foto4.png',
    'img/foto5.png',
];
var visualizar = imagens[num];
document.write('<h1> === APERTE F5 === </h1>');
document.write(`<img src="${visualizar}">`);