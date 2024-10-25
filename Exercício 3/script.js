var icones = [
    'img/finderface.png',
    'img/ligarDesligar.png',
    'img/spotify.png',
    'img/whatsapp.png',
    'img/cadeado.png',
    'img/folder.png',
    'img/word.png',
    'img/point.png',
    'img/add.png',
    'img/configuracao.png'
];

var container = document.getElementById('icons');

container.classList.add('icon-container');

icones.forEach(function(icone) {
    container.innerHTML += `<img src="${icone}" class="icon">`;
});