let boardSize = 8; // Default board size
let boardSizeM = 8;
let chessBoard = null;
let imgQueen = "./chess/img/wQ.png"
let imgKnight = "./chess/img/wN.png"
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

//----------------------------------------Queen-------------------------------------------------
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

function removeQueen(i, j) {
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

    const startSquare = document.getElementById(`square${startRow}-${startCol}`);
    const endSquare = document.getElementById(`square${endRow}-${endCol}`);

    if (!startSquare || !endSquare) {
        console.error('Invalid positions.');
        return;
    }

    const queen = startSquare.querySelector("img");
    if (queen) {
        const deltaX = endCol - startCol;
        const deltaY = endRow - startRow;
        let square = 600 / boardSize    //kich thuoc moi o
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



//----------------------------------------Knight-------------------------------------------------

function addKnight(i, j) {
    const square = document.getElementById(`square${i}-${j}`);
    if (square) {
        //neu co the
        if (!square.querySelector("img")) {
            //neu chua co Knight
            const Knight = document.createElement("img");
            Knight.src = imgKnight;
            Knight.classList.add("chess-piece");
            square.appendChild(Knight);
            square.classList.add("Knight");
        }
    }
}

function removeKnight(i, j) {
    const square = document.getElementById(`square${i}-${j}`);
    if (square) {
        const KnightImg = square.querySelector("img");

        if (KnightImg) {
            square.removeChild(KnightImg);
        }
    }
}

function moveKnight(startPosition, endPosition) {
    const [startRow, startCol] = startPosition.split('-').map(Number);
    const [endRow, endCol] = endPosition.split('-').map(Number);

    const startSquare = document.getElementById(`square${startRow}-${startCol}`);
    const endSquare = document.getElementById(`square${endRow}-${endCol}`);

    if (!startSquare || !endSquare) {
        console.error('Invalid positions.');
        return;
    }

    const Knight = startSquare.querySelector("img");
    if (Knight) {
        const deltaX = endCol - startCol;
        const deltaY = endRow - startRow;
        let square = 600 / boardSize    //kich thuoc moi o
        // Sử dụng transform để di chuyển quân hậu
        Knight.style.transform = `translate(${deltaX * square}px, ${deltaY * square}px)`;
        Knight.style.zIndex = "9999"
        // Sử dụng setTimeout để loại bỏ transform sau khi hoàn thành di chuyển
        setTimeout(() => {
            Knight.style.transform = "";
            startSquare.removeChild(Knight);
            endSquare.appendChild(Knight);
        }, 300); // 500ms tương ứng với thời gian transition trong CSS
    }
}

function addNumberToSquare(i, j, number) {
    const square = document.getElementById(`square${i}-${j}`);

    // Tạo một phần tử con là một thẻ div
    const numberDiv = document.createElement("div");
    numberDiv.textContent = number; // Đặt nội dung số vào div
    numberDiv.classList.add("number"); // Thêm lớp CSS nếu cần thiết

    // Thêm phần tử con vào ô
    square.appendChild(numberDiv);
}

function removeNumberFromSquare(i, j) {
    const square = document.getElementById(`square${i}-${j}`);

    // Tìm phần tử con có lớp CSS "number" (hoặc lớp bạn đã thêm)
    const numberDiv = square.querySelector(".number");

    if (numberDiv) {
        // Xóa phần tử con số khỏi ô cờ
        square.removeChild(numberDiv);
    }
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
    m = boardSizeM
    numberRow.style.setProperty("--size", boardSize);
    numberCol.style.setProperty("--sizeM", boardSizeM);
    for (let i = 0; i < n; i++) {
        const numberCellR = document.createElement("div");
        numberCellR.className = "number-cell-row";
        numberCellR.textContent = i;
        numberRow.appendChild(numberCellR);
    }
    for (let i = 0; i < m; i++) {
        const numberCellC = document.createElement("div");
        numberCellC.className = "number-cell-col";
        numberCellC.textContent = String.fromCharCode(97 + i);
        numberCol.appendChild(numberCellC);
    }
}

