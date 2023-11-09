let boardSizeK = 8
let boardSizeMK = 8
//----------------------------------------Knight-------------------------------------------------
function createChessBoardKnight(row,col) {
    // sizeValue = document.getElementById(id).value;

    // boardSizeM = parseInt(document.getElementById(id).valueM);
    // if(sizeValue.length >1) {
    //     numbSize = sizeValue.split("-");
    //     boardSizeK = parseInt(numbSize[0], 10)
        // alert(parseInt(numbSize[0], 10))
        // boardSizeMK = parseInt(numbSize[1], 10)
        // alert(nK +"="+ boardSizeMK)
    // }else if(id=="boardSizeMK" || id=="boardSizeK"){
        boardSizeK = row;
        boardSizeMK = col;
        console.log("bordK"+boardSizeK+":borM"+boardSizeMK)
    // }
    // else{
    //     boardSizeK = parseInt(document.getElementById(id).value);
    //     boardSizeMK = boardSizeK
    // }
    nK = boardSizeK
    mK = boardSizeMK
    const board = document.getElementById("chessBoardKnight");
    board.innerHTML = ""; // Clear the board

    // Create a chessboard grid
    board.style.setProperty("--size", boardSizeK);
    board.style.setProperty("--sizeM", boardSizeMK);

    board.classList.add("chess-board");

    for (let i = 0; i < boardSizeK; i++) {
        for (let j = 0; j < boardSizeMK; j++) {
            const squareK = document.createElement("div");
            squareK.classList.add("chess-squareK");
            // squareK.textContent = `${i}-${j}`;
            squareK.id = `squareK${i}-${j}`;
            squareK.classList.add((i + j) % 2 === 0 ? "white" : "black");
            // squareK.addEventListener("click", () => addQueen(i, j));
            board.appendChild(squareK);
        }
    }
    createNumbarKnight(row,col)
    
}

function addKnight(i, j) {
    const squareK = document.getElementById(`squareK${i}-${j}`);
    if (squareK) {
        //neu co the
        if (!squareK.querySelector(".chess-piece")) {
            squareK.classList.add("relative_position")
            //neu chua co Knight
            const Knight = document.createElement("img");
            Knight.src = imgKnight;
            Knight.classList.add("chess-piece");
            Knight.classList.add("knight_asoblute")
            Knight.zIndex = zIndexImgChess
            squareK.appendChild(Knight);
            squareK.classList.add("Knight");
        }
    }
}

 function removeKnight(i, j) {
    const squareK = document.getElementById(`squareK${i}-${j}`);
    if (squareK) {
        const KnightImg = squareK.querySelector("img");

        if (KnightImg) {
            squareK.removeChild(KnightImg);
        }
    }
}

//ex: moveKnight("0-0","1-2")
async function moveKnight(startPosition, endPosition) {
    const [startRow, startCol] = startPosition.split('-').map(Number);
    const [endRow, endCol] = endPosition.split('-').map(Number);

    const startSquareK = document.getElementById(`squareK${startRow}-${startCol}`);
    const endSquareK = document.getElementById(`squareK${endRow}-${endCol}`);
    startSquareK.classList.add("relative_position")
    endSquareK.classList.add("relative_position")
    if (!startSquareK || !endSquareK) {
        console.error('Invalid positions.');
        return;
    }

    const Knight = startSquareK.querySelector("img");
    if (Knight) {
        const deltaX = endCol - startCol;
        const deltaY = endRow - startRow;
        let squareK = boardWith / boardSize    //kich thuoc moi o
        // Sử dụng transform để di chuyển quân hậu
        Knight.style.transform = `translate(${deltaX * squareK}px, ${deltaY * squareK}px)`;
        Knight.style.zIndex = zIndexImgChess
        // Sử dụng setTimeout để loại bỏ transform sau khi hoàn thành di chuyển
        return new Promise((resolve) => {
            setTimeout(() => {
                Knight.style.transform = "";
                startSquareK.removeChild(Knight);
                endSquareK.appendChild(Knight);
                resolve();
            }, delay); // 500ms tương ứng với thời gian transition trong CSS
        })
    }
}

function checkPreviousMove(x,y){
    let isOk = false;
    for (let i = 0; i < 8; i++) {
        //  sleep(delay);
        const prevX = x + knightMoves[i][0];
        const prevY = y + knightMoves[i][1];
        //khong vuot ra ban co và có vị trí prev  = numc-1
        if(prevX >= 0 && prevY >= 0 && prevX < nK && prevY < mK && Knight[prevX][prevY] == numC-1 && Knight[x][y] == -1){
            console.log(`check:${prevX}-${prevY}`)
            sPoi = `${prevX}-${prevY}`;
            return sPoi;
        }
    }

    return isOk;
}

function addNumberToSquareK(i, j, number) {
    const squareK = document.getElementById(`squareK${i}-${j}`);
    if(!squareK.querySelector(".number")){
            
    // Tạo một phần tử con là một thẻ div
    const numberDiv = document.createElement("div");
    numberDiv.textContent = number; // Đặt nội dung số vào div
    numberDiv.classList.add("number"); // Thêm lớp CSS nếu cần thiết

    // Thêm phần tử con vào ô
    squareK.appendChild(numberDiv);
    }
}

function removeNumberFromSquareK(i, j) {
    const squareK = document.getElementById(`squareK${i}-${j}`);

    // Tìm phần tử con có lớp CSS "number" (hoặc lớp bạn đã thêm)
    const numberDiv = squareK.querySelector(".number");

    if (numberDiv) {
        // Xóa phần tử con số khỏi ô cờ
        squareK.removeChild(numberDiv);
    }
}

//tạo thanh số
function createNumbarKnight(row,col) {
    const numberCol = document.querySelector(".number-columnKnight");
    const numberRow = document.querySelector(".number-rowKnight");
    numberCol.innerHTML = ""
    numberRow.innerHTML = ""
    boardSizeK = row;
    // boardSizeMK = parseInt(document.getElementById("boardSizeMK").value);
    boardSizeMK =  col;

    nK = boardSizeK
    mK = boardSizeMK
    numberRow.style.setProperty("--size", boardSizeK);
    numberCol.style.setProperty("--sizeM", boardSizeMK);
    for (let i = 0; i < nK; i++) {
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


createChessBoardKnight(5,5)