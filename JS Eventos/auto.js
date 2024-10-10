var imagens = [
    'img/foto1.webp',
    'img/foto2.webp',
    'img/foto3.jpg',
    'img/foto4.png',
    'img/foto5.png',
];

var banner = document.getElementById("banner");

i = 0;

setInterval(() => {

    banner.src = imagens[i];
    i++;

    if(i == 5)
        i = 0;
}, 1000);