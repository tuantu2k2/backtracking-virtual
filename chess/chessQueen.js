//----------------------------------------Queen-------------------------------------------------
let boardSize = 8; // Default board size
let boardSizeM = 8;
let chessBoard = null;
let boardWith = 500;
let imgQueen = "./chess/img/wQ.png"
let imgKnight = "./chess/img/wN.png"
const zIndexImgChess = 9999

function createChessBoard(row) {

    boardSize = row
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
    createNumbar(row)
    // if(isPlayActivated) {
    //     hightlightPlayBtn("Q")
    //     isPlayActivated = false
    // }
}



//tạo thanh số
function createNumbar(row) {
    const numberCol = document.querySelector(".number-column");
    const numberRow = document.querySelector(".number-row");
    numberCol.innerHTML = ""
    numberRow.innerHTML = ""
    boardSize = row;
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

function addQueen(i, j) {
    const square = document.getElementById(`square${i}-${j}`);
    if (square) {
        //neu co the
        if (!square.querySelector("img")) {
            //neu chua co queen
            const queen = document.createElement("img");
            queen.src = imgQueen;
            queen.classList.add("chess-piece");
            square.appendChild(queen);
            square.classList.add("queen");
        }
    }
}

async function removeQueen(i, j) {
    const square = document.getElementById(`square${i}-${j}`);
    if (square) {
        const queenImg = square.querySelector("img");

        if (queenImg) {
            square.removeChild(queenImg);
        }
    }
}

async function moveQueen(startPosition, endPosition) {
    const [startRow, startCol] = startPosition.split('-').map(Number);
    const [endRow, endCol] = endPosition.split('-').map(Number);
    const startID = `square${startRow}-${startCol}`
    const endID = `square${endRow}-${endCol}`
    const startSquare = document.getElementById(startID);
    const endSquare = document.getElementById(endID);


    if (!startSquare || !endSquare) {
        console.error('Invalid positions.');
        return;
    }

    const queen = startSquare.querySelector("img");
    if (queen) {
        const deltaX = endCol - startCol;
        const deltaY = endRow - startRow;
        let square = boardWith / boardSize    //kich thuoc moi o
        // Sử dụng transform để di chuyển quân hậu
        queen.style.transform = `translate(${deltaX * square}px, ${deltaY * square}px)`;

        // Sử dụng setTimeout để loại bỏ transform sau khi hoàn thành di chuyển
        return new Promise((resolve) => {
            setTimeout(() => {
                queen.style.transform = "";
                startSquare.removeChild(queen);
                endSquare.appendChild(queen);
                resolve();
            }, delay); // 500ms tương ứng với thời gian transition trong CSS
        })
    }
}


createChessBoard(8)
