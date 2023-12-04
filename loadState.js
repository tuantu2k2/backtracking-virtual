function loadData() {
    if (localStorage.getItem("stateChess") == '2') {
        toKnightPage();
        loadStateK();
    }
    else {
        // Load the state from local storage
        toQueenPage();
        loadStateQ();

    }

}

// State serialization
function serializeStateQ() {
    return JSON.stringify({
        idxforQueen: idxforQueen,
        queens: queens,
        boardSize: boardSize,
        boardSizeM: boardSizeM
    });
}

function serializeStateK() {
    return JSON.stringify({
        numC: numC,
        Knight: Knight,
        boardSizeK: boardSizeK,
        boardSizeMK: boardSizeMK
    });
}

// State deserialization
function loadStateQ() {
    let isLoad = localStorage.getItem('stateChess')
    const serializedState = localStorage.getItem('queensState');
    const state = JSON.parse(serializedState);
    if (isLoad == "1" && state) {

        idxforQueen = state.idxforQueen
        queens = state.queens
        boardSize = state.boardSize
        createChessBoard(boardSize)
        for (let i = 0; i < idxforQueen; i++) {
            addQueen(i, state.queens[i])
        }
    }
}

function saveStateK() {
    // Save the state to local storage
    localStorage.setItem('stateChess', 2)
    localStorage.setItem('knightState', serializeStateK());
}

function loadStateK() {
    let isLoad = localStorage.getItem('stateChess')
    const serializedState = localStorage.getItem('knightState');
    const state = JSON.parse(serializedState);
    if (isLoad == "2" && state) {
        numC = state.numC
        Knight = state.Knight
        boardSizeK = state.boardSizeK
        boardSizeMK = state.boardSizeMK
        createChessBoardKnight(boardSizeK, boardSizeMK)
        for (let i = 0; i < boardSizeK; i++)
            for (let j = 0; j < boardSizeMK; j++) {
                if (Knight[i][j] != -1) {
                    addNumberToSquareK(i, j, Knight[i][j])
                }
                if (Knight[i][j] == numC - 1) {
                    addKnight(i, j, numC - 1)
                    curentPoix = i;
                    curentPoiy = j;
                }
            }

    }
}

function saveStateQ() {
    // Save the state to local storage
    localStorage.setItem('stateChess', 1)
    localStorage.setItem('queensState', serializeStateQ());
}

function clearQueenState() {
    localStorage.removeItem("queensState")
}

function clearState() {
    // Save the state to local storage
    let state = localStorage.getItem("stateChess");
    //reset  nhưng vẫn lưu kích thước bàn cờ
    if (state == 1) {
        initQ()
        saveStateQ();
        let queensState = localStorage.getItem("queensState");
        localStorage.clear();
        localStorage.setItem("queensState", queensState);
    } else if (state == 2) {
        initK()
        numC = 1
        saveStateK()
        let knightState = localStorage.getItem("knightState");
        localStorage.clear();
        localStorage.setItem("knightState", knightState);
    }

    //clear bộ nhớ vẫn giữ lại page
    localStorage.setItem("stateChess", state);
    location.reload()
}
loadData()
