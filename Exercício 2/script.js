var num = Math.floor(Math.random() * 5);

var imagens = [
    'img/foto1.webp',
    'img/foto2.webp',
    'img/foto3.jpg',
    'img/foto4.png',
    'img/foto5.png',
];

var textos = [
    'Frete Grátis',
    'Melhores Produtos, Menores Preços',
    'Banner',
    'Melhores Produtos, Melhores Clientes',
    'Telas Flutuando'
];

var visualizar = imagens[num];
var texto = textos[num];

document.write(
    `<div style="text-align: center;">
    <h1> === APERTE F5 === </h1>
    <h1>${texto}</h1>
    <img src="${visualizar}" style="height: 300px;">
    </div>`
);