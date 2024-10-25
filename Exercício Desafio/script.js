const images = {
    mira: 'img/mira.png',
    agua: 'img/agua.png',
    alvo1: 'img/alvo1.png',
    alvo2: 'img/alvo2.png',
    alvo3: 'img/alvo3.png'
};

// Inicializa variáveis e tabuleiro
const boardSize = 10;
const minAlvos = 12;
const board = Array(boardSize).fill().map(() => Array(boardSize).fill('mira'));

function generateBoard() {
    const gameBoard = document.getElementById('game-board');

    // Gera a primeira linha com letras
    const letters = [' ', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    letters.forEach(letter => {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.textContent = letter;
        gameBoard.appendChild(cell);
    });

    // Cria o tabuleiro com as células
    for (let i = 0; i < boardSize; i++) {
        // Adiciona o índice da linha
        const rowIndex = document.createElement('div');
        rowIndex.classList.add('cell');
        rowIndex.textContent = i + 1;
        gameBoard.appendChild(rowIndex);

        for (let j = 0; j < boardSize; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.dataset.row = i;
            cell.dataset.col = j;
            cell.innerHTML = `<img src="${images.mira}" alt="mira">`;
            cell.addEventListener('click', handleShot);
            gameBoard.appendChild(cell);
        }
    }
}

function placeTargets() {
    let alvosPlaced = 0;
    const alvoTypes = ['alvo1', 'alvo2', 'alvo3'];

    while (alvosPlaced < minAlvos) {
        const row = Math.floor(Math.random() * boardSize);
        const col = Math.floor(Math.random() * boardSize);

        if (board[row][col] === 'mira') {
            const alvo = alvoTypes[alvosPlaced % alvoTypes.length];
            board[row][col] = alvo;
            alvosPlaced++;
        }
    }
}

function handleShot(event) {
    const cell = event.currentTarget;
    const row = cell.dataset.row;
    const col = cell.dataset.col;
    const alvo = board[row][col];

    if (alvo === 'mira') {
        cell.innerHTML = `<img src="${images.agua}" alt="agua">`;
        cell.classList.add('miss');
    } else {
        cell.innerHTML = `<img src="${images[alvo]}" alt="alvo">`;
        cell.classList.add('hit');
        board[row][col] = 'hit'; // marca como acertado
    }
    cell.removeEventListener('click', handleShot); // desativa o clique após o tiro
}

generateBoard();
placeTargets();  