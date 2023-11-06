let boardSize = 8; // Default board size
let boardSizeM = 8;
let chessBoard = null;
let boardWith = 500;
let imgQueen = "./chess/img/wQ.png"
let imgKnight = "./chess/img/wN.png"
const zIndexImgChess = 9999
function createChessBoard(id) {
    boardSize = parseInt(document.getElementById(id).value);
    // boardSizeM = parseInt(document.getElementById("boardSizeM").value);
    boardSizeM = boardSize;
    n = boardSize
    m = boardSizeM
    const board = document.getElementById("chessBoard");
    board.innerHTML = ""; // Clear the board

    // Create a chessboard grid
    board.style.setProperty("--size", n);
    board.style.setProperty("--sizeM", m);

    board.classList.add("chess-board");

    for (let i = 0; i < boardSize; i++) {
        for (let j = 0; j < boardSizeM; j++) {
            const square = document.createElement("div");
            square.classList.add("chess-square");
            // square.textContent = `${i}-${j}`;
            square.id = `square${i}-${j}`;
            square.classList.add((i + j) % 2 === 0 ? "white" : "black");
            // square.addEventListener("click", () => addQueen(i, j));
            board.appendChild(square);
        }
    }
    createNumbar(id)
}



//tạo thanh số
function createNumbar(id) {
    const numberCol = document.querySelector(".number-column");
    const numberRow = document.querySelector(".number-row");
    numberCol.innerHTML = ""
    numberRow.innerHTML = ""
    boardSize = parseInt(document.getElementById(id).value);
    // boardSizeM = parseInt(document.getElementById("boardSizeM").value);
    boardSizeM = boardSize
    n = boardSize
    mK = boardSizeM
    numberRow.style.setProperty("--size", boardSize);
    numberCol.style.setProperty("--sizeM", boardSizeM);
    for (let i = 0; i < n; i++) {
        const numberCellR = document.createElement("div");
        numberCellR.className = "number-cell-row";
        numberCellR.textContent = i;
        numberRow.appendChild(numberCellR);
    }
    for (let i = 0; i < mK; i++) {
        const numberCellC = document.createElement("div");
        numberCellC.className = "number-cell-col";
        numberCellC.textContent = String.fromCharCode(97 + i);
        numberCol.appendChild(numberCellC);
    }
}

//change background color square
function highLightSquareErr(squareID){
    let square = document.getElementById(squareID)
    square.classList.add("square-highlight")
    // Loại bỏ lớp `square-highlight` sau 1 giây
    setTimeout(function() {
        square.classList.remove("square-highlight");
    }, 500); // 1000ms = 1 giây
}
function removehighLightSquare(){

}

function highLightLegelMove(squareID){
    let square = document.getElementById(squareID)
    square.classList.add("square-highlightHover")
}