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


